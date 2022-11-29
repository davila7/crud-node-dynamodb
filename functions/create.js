const { v4 } = require('uuid')

const createProduct = async(event) => {

  const { name, price } = event.body;
  const createAt = new Date();
  const id = v4();



}

module.exports.createProduct = {
  createProduct
};
