const AWS = require('aws-sdk')

const deleteProduct = async (event) =>{
    try{
        const dynamodb = new AWS.DynamoDB.DocumentClient();
        const TABLE_NAME = process.env.DYNAMODB_PRODUCT_TABLE
        const { id } = event.pathParameters
        
        const result = await dynamodb.delete({
            TableName: TABLE_NAME,
            Key: {
                id: id
            }
        }).promise();


        return {
            status: 200,
            body: JSON.stringify({ 
                message: 'Product deleted'
            })
        }
    }catch(error){
        console.log(error);
    }
};

module.exports = {
    deleteProduct
}