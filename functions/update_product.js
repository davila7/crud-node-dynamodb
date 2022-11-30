const AWS = require('aws-sdk')

const updateProduct = async (event) =>{
    try{
        const dynamodb = new AWS.DynamoDB.DocumentClient();
        const TABLE_NAME = process.env.DYNAMODB_PRODUCT_TABLE
        const { id } = event.pathParameters
        const { sold } = JSON.parse(event.body);
        
        const result = await dynamodb.update({
            TableName: TABLE_NAME,
            UpdateExpression: 'set sold = :sold',
            ExpressionAttributeValues: {
                ':sold': sold
            },
            Key: {
                id: id
            },
            ReturnValues: 'ALL_NEW'
        }).promise();


        return {
            status: 200,
            body: JSON.stringify({ 
                message: 'Product updated'
            })
        }
    }catch(error){
        console.log(error);
    }
};

module.exports = {
    updateProduct
}