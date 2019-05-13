var config = require('../middlewares/dynamoDB/dynamodb_config')
var AWS = require('aws-sdk');
var UUID = require('uuid');

// build the payload here 
const buildPayload = (
    file, fileName,
    UUID,
    addedOn
) => {
    return {
        // return object
    }
}
const saveItem = (item) => {
    /*[Configuration of DynamoDB] (https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB.html) */
    AWS.config.apiVersions = {
        dynamodb: config.version
    }
    /* Destructure Object */
    //const {} = item.body
    // stuff stuff 

    /*[AWS Configuration/Authentication] (https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Config.html)*/
    AWS.config.update({
        region: config.region,
        credentials: {
            accessKeyId: config.aws_access_key_id,
            secretAccessKey: config.aws_secret_access_key
        },
        /* For Development Purposes turn off encryption */
        sslEnabled: false,

    })
    /* Create Instance of DynamoDB */
    var dynamodb = new AWS.DynamoDB();

   // let primaryKey = auditId || UUID.v4()
    const params = {
        TableName: config.tableName,
        Item:
            /*[Marshall] (https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB/Converter.html#marshall-property) */
            AWS.DynamoDB.Converter.marshall(
                buildPayload(primaryKey, cards),
                { convertEmptyValues: true }
            )
    }
    /*[putItem] (https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB.html#putItem-property) */
    const putItemPromise = dynamodb.putItem(params).promise();

    return putItemPromise.then(
        (response) => {
            console.log("  Sucessfully saved into DynamoDB...");
            console.log(JSON.stringify(response))
            //return primaryKey;
        }
    ).catch(
        (err) => {
            console.log(err);
            return err;
        }
    )


}
module.exports = saveItem;