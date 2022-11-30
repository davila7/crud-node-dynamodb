const AWS = require('aws-sdk')

const getProducts = async (event) =>{
    try{
        const dynamodb = new AWS.DynamoDB.DocumentClient();
        const TABLE_NAME = process.env.DYNAMODB_PRODUCT_TABLE

        const result = await dynamodb.scan({
            TableName: TABLE_NAME,
        }).promise();

        const products = result.Items

        console.log(products);

        return {
            status: 200,
            body: {
                products
            }
        }
    }catch(error){
        console.log(error);
    }
};

module.exports = {
    getProducts
}