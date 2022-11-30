const AWS = require('aws-sdk')

const getProducts = async (event) =>{
    const dynamodb = new AWS.DynamoDB.DocumentClient();
    const TABLE_NAME = process.env.DYNAMODB_PRODUCT_TABLE

    const result = dynamodb.scan({
        TableName: TABLE_NAME,
    }).promise();

    const products = result.Items

    return {
        statusCode: 200,
        body: products
    }
};

module.exports = {
    getProducts
}