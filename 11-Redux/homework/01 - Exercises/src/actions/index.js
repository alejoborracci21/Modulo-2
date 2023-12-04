// actions.js
const { INCREMENTO, DECREMENTO, INCREMENTO_IMPAR } = require('../action-types');

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



module.exports = {
  incremento,
  decremento,
  incrementoImpar
};
