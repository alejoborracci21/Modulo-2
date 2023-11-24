//boton para ver lista de amigos
$('#boton').click(function(){
    let lista = document.getElementById('lista')
    lista.innerText = ""
    $.ajax({
        url: 'http://localhost:5000/amigos', 
        method: 'GET',
        dataType: 'json',
        success: function(data) {
          data.forEach(function(amigo) {
           lista.innerHTML += '→ ' + amigo.name + '<br>'
          });
        },
        error: function() {
          alert('Ese amigo no existe');
        }
      });
    })


//Buscar amigo por ID
$('#search').click(function(){
    let input = document.getElementById('input')
    let index = input.value
    let span = document.getElementById('amigo')
    input.value = ""
    span.innerText = ""
    $.ajax({
        url: 'http://localhost:5000/amigos/' + index,
        type: 'GET',
        dataType: 'json',
        success: function(data){
            span.innerText = data.name
        },
        error: function(){
            span.innerText = 'No existe un amigo con ese ID'
        }
    })
})


//Borrar amigo por IDD
$('#delete').click(function(){
    let input = document.getElementById('inputDelete')
    let indice = input.value
    input.value ="";
    $.ajax({
        url: 'http://localhost:5000/amigos/' + indice,
        type: 'DELETE',
        success: function(){
            $('#success').text('Amigo Eliminado');
        },
        error: function(){
            console.error('El amigo no fue eliminado', error)
        }
    })
})
