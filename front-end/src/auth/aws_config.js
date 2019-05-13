const config = {
    Auth: {
    // REQUIRED - Amazon Cognito Identity Pool ID
        identityPoolId: process.env.REACT_APP_AWS_COGNITO_identityPoolId,
    // REQUIRED - Amazon Cognito Region
        region: process.env.REACT_APP_AWS_COGNITO_region,
    // OPTIONAL - Amazon Cognito User Pool ID
        userPoolId: process.env.REACT_APP_AWS_COGNITO_userPoolId,
    // OPTIONAL - Amazon Cognito Web Client ID
        userPoolWebClientId: process.env.REACT_APP_AWS_COGNITO_userPoolWebClientId,
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
export default config