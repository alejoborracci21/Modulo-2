var traverseDomAndCollectElements = function (matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  
  // Función interna para realizar la traversía recursiva del DOM
  var traverse = function (currentEl) {
    // Comprueba si el elemento actual coincide con la función de coincidencia
    if (matchFunc(currentEl)) {
      // Si coincide, agrégalo al conjunto de resultados
      resultSet.push(currentEl);
    }

    // Recorre los hijos del elemento actual
    for (var i = 0; i < currentEl.children.length; i++) {
      // Llama recursivamente a traverse para cada hijo
      traverse(currentEl.children[i]);
    }
  };

  // Inicia la traversía desde el elemento inicial
  traverse(startEl);

  // Devuelve el conjunto de resultados
  return resultSet;
};



const selectorTypeMatcher = function (selector) {
  // Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag
  // tu código aquí
  //ARRANCAR POR ACA
  //SELECTOR ES algo asi "#myId", "div.class", ".class"
  for(let i = 0; i < selector.length; i++){
    if(selector[0] === "#"){
      return "id"
    }else if(selector[0] === "."){
      return "class"
    }else if(selector.includes(".")){
      return "tag.class"
    }
  }
  return "tag"
};



var matchFunctionMaker = function (selector) {
  // NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.


 // Paso 1: Determinar el tipo de selector (id, class, tag.class, tag)
 var selectorType = selectorTypeMatcher(selector);
  
 // Paso 2: Inicializar la variable que contendrá la función de coincidencia
 var matchFunction;

 // Paso 3: Crear la función de coincidencia según el tipo de selector
 if (selectorType === "id") {
   // Si es un selector de tipo id (#id), crea la función correspondiente
   matchFunction = function (element) {
     // La función toma un elemento como parámetro
     return element.id === selector.slice(1);
     // Devuelve true si el id del elemento coincide con el identificador del selector
   };
 } else if (selectorType === "class") {
   // Si es un selector de tipo class (.class), crea la función correspondiente
   matchFunction = function (element) {
     // La función toma un elemento como parámetro
     return element.classList.contains(selector.slice(1));
     // Devuelve true si la clase del elemento contiene el nombre de clase especificado en el selector
   };
 } else if (selectorType === "tag.class") {
   // Si es un selector de tipo tag.class (tag.class), crea la función correspondiente
   var partes = selector.split('.');
   var tag = partes[0];
   var className = partes[1];
   
   matchFunction = function (element) {
     // La función toma un elemento como parámetro
     return element.tagName.toLowerCase() === tag && element.classList.contains(className);
     // Devuelve true si el nombre de la etiqueta del elemento coincide y la clase del elemento contiene el nombre de clase especificado en el selector
   };
 } else if (selectorType === "tag") {
   // Si es un selector de tipo tag, crea la función correspondiente
   matchFunction = function (element) {
     // La función toma un elemento como parámetro
     return element.tagName.toLowerCase() === selector.toLowerCase();
     // Devuelve true si el nombre de la etiqueta del elemento coincide con el nombre de la etiqueta especificado en el selector
   };
 }

 // Paso 4: Devolver la función de coincidencia creada
 return matchFunction;
};

var $ = function (selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
