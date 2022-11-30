const AWS = require('aws-sdk')

const getProduct = async (event) =>{
    try{
        const dynamodb = new AWS.DynamoDB.DocumentClient();
        const TABLE_NAME = process.env.DYNAMODB_PRODUCT_TABLE
        const { id } = event.pathParameters
        
        const result = await dynamodb.get({
            TableName: TABLE_NAME,
            Key: {
                id: id
            }
        }).promise();

        const product = result.Item

        return {
            status: 200,
            body: {
                product
            }
        }
    }catch(error){
        console.log(error);
    }
};

module.exports = {
    getProduct
}