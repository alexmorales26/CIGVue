const config = require('config').get('aws.dynamoDB');

module.exports = {
    table: {
        tableName : config.tableName
    },
    paths: {
        service :config.service,
        region : config.region
    },
    version : config.version,
    auth:{
        aws_access_key_id : config.aws_access_key_id,
        aws_secret_access_key : config.aws_secret_access_key
    }
}