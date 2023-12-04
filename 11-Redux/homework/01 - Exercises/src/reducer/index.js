const { INCREMENTO, DECREMENTO, INCREMENTO_IMPAR } = require('../action-types');

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
      return state.contador % 2 !== 0
        ? { ...state, contador: state.contador + 1 }
        : state;
    default:
      return state;
  }
}

module.exports = contador;