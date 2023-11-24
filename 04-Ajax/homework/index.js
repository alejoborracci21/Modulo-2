//boton para ver lista de amigos
$('#boton').click(function(){
    $.get('http://localhost:5000/amigos', function(data){
        console.log(data)
    })
})


//Buscar amigo por ID
$('#search').click(function(){
    let input = document.getElementById('input')
    let index = input.value
        $.get('http://localhost:5000/amigos/' + index, function(data){
     console.log(data)
     input.value = "";
        })
})


//Borrar amigo por IDD
$('#delete').click(function(){
    let input = document.getElementById('inputDelete')
    let indice = input.value
    $.ajax({
        url: 'http://localhost:5000/amigos/' + indice,
        type: 'DELETE',
        success: function(respuesta){
            $('#success').text('Amigo Eliminado');
            input.value ="";
        },
        error: function(error){
            console.error('El amigo no fue eliminado', error)
        }
    })
})
