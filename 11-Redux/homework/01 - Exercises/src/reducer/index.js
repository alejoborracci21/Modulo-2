const { INCREMENTO, DECREMENTO, INCREMENTO_IMPAR, INCREMENTO_ASYNC } = require('../action-types');

const initialState = {
  contador: 0
};

function contador(state = initialState, action) {
  switch (action.type) {
    case INCREMENTO:
      return {
        ...state,
        contador: state.contador + 1
      };
    case DECREMENTO:
      return {
        ...state,
        contador: state.contador - 1
      };
    case INCREMENTO_IMPAR:
      // Incrementar solo si el contador es impar
      return state.contador % 2 !== 0
        ? { ...state, contador: state.contador + 1 }
        : state;
    // La acción INCREMENTO_ASYNC no hace nada directamente en el reducer
    default:
      return state;
  }
}

module.exports = contador;