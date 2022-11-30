const { v4 } = require('uuid')
const AWS = require('aws-sdk')

const createProduct = async(event) => {

  const dynamodb = new AWS.DynamoDB.DocumentClient();
  const { name, price } = JSON.parse(event.body);
  const createdAt = new Date();
  const id = v4();
  const TABLE_NAME = process.env.DYNAMODB_PRODUCT_TABLE

  const newProduct = {
    id,
    name,
    price,
    createdAt
  }

  await dynamodb.put({
    TableName: TABLE_NAME,
    Item: newProduct
  }).promise();

  return {
    statusCode: 200,
    body: JSON.stringify(newProduct)
  }

}

module.exports = {
  createProduct
};
