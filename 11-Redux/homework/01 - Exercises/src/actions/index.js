// actions.js
const { INCREMENTO, DECREMENTO, INCREMENTO_IMPAR, INCREMENTO_ASYNC } = require('../action-types');

const incremento = () => {
  return {
    type: INCREMENTO
  };
};

const decremento = () => {
  return {
    type: DECREMENTO
  };
};

const incrementoImpar = () => {
  return {
    type: INCREMENTO_IMPAR
  };
};

const incrementoAsync = () => {
  return dispatch => {
    setTimeout(() => {
      dispatch(incremento());
    }, 100);
  };
};

module.exports = {
  incremento,
  decremento,
  incrementoImpar,
  incrementoAsync
};
