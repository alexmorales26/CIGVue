const creds = require('config').get('aws.cognito');

const config = {
    auth: {
    // REQUIRED - Amazon Cognito Identity Pool ID
        identityPoolId: creds.identityPoolId,
    // REQUIRED - Amazon Cognito Region
        region:  creds.region,
    // OPTIONAL - Amazon Cognito User Pool ID
        userPoolId:  creds.userPoolId,
    // OPTIONAL - Amazon Cognito Web Client ID
        userPoolWebClientId: creds.userPoolWebClientId,
    // OPTIONAL - Enforce user authentication prior to accessing AWS resources or not
      //  mandatorySignIn: false,
    // OPTIONAL - Configuration for cookie storage
        /*cookieStorage: {
        // REQUIRED - Cookie domain (only required if cookieStorage is provided)
            domain: '.yourdomain.com',
        // OPTIONAL - Cookie path
            path: '/',
        // OPTIONAL - Cookie expiration in days
            expires: 365,
        // OPTIONAL - Cookie secure flag
            secure: true
        }*/
    },
    URL:(region,userPoolId)=>`https://cognito-idp.${region}.amazonaws.com/${userPoolId}`
}
module.exports = config