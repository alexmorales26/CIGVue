console.log("...Loading JWT Method");
var jwt = require('jsonwebtoken');
var jwkToPem = require('jwk-to-pem');
var config = require('config').get('aws.cognito');
var props = require('./cognito_config')
var userPoolId = props.auth.userPoolId;
var region = props.auth.region;
var iss = props.URL(region, userPoolId) // string template [region,userPoolId]
var pems;
/* Get pem response from a  console log*/
let pemResponse = config.jwtKeys

module.exports = function (req, res, next) {
    /* Development console.logs to verify headers */
    /*
    console.log(iss)
    console.log(`New Request. Method: ${JSON.stringify(req.method)}`)
    console.log(`New Request. Headers: ${JSON.stringify(req.headers)}`)
    */
    if(req.method === "OPTIONS") return next();
    if(!pems) {
        pems = {};
        var keys = pemResponse['keys'];
        for (var i = 0; i < keys.length; i++) {
            //Convert each key to PEM
            var key_id = keys[i].kid;
            var modulus = keys[i].n;
            var exponent = keys[i].e;
            var key_type = keys[i].kty;
            var jwk = { kty: key_type, n: modulus, e: exponent };
            var pem = jwkToPem(jwk);
            pems[key_id] = pem;
        }
        //Now continue with validating the token
        ValidateToken(pems, req, res, next);
    } else {
        console.log('Already Has PEMs')
        //PEMs are already downloaded, continue with validating the token
        ValidateToken(pems, req, res, next);
    }
};

function ValidateToken(pems, event, res, next) {
    var token = event.headers.authorization;
    //Fail if the token is not jwt
    var decodedJwt = jwt.decode(token, { complete: true });
    /*Developement verify token is being stored in header & decoded */
    /*
    console.log(`Token: ${JSON.stringify(token)}`)
    console.log(`Decoded: ${JSON.stringify(decodedJwt)}`)
    */
    if (!decodedJwt) {
        console.log("Not a valid JWT token");
        res.sendStatus(401, "Unauthorized").end()
        return;
    }

    //Fail if token is not from your UserPool
    if (decodedJwt.payload.iss != iss) {
        console.log("invalid issuer");
        res.sendStatus(401, "Unauthorized").end()
        return;
    }

    //Reject the jwt if it's not an 'ID Token'
    if (decodedJwt.payload.token_use != 'id') {
        console.log("Not an ID token");
        res.sendStatus(401, "Unauthorized").end()
        return;
    }

    //Get the kid from the token and retrieve corresponding PEM
    var kid = decodedJwt.header.kid;
    var pem = pems[kid];
    if (!pem) {
        console.log('Invalid access token');
        res.sendStatus(401, "Unauthorized").end()
        return;
    }

    //Verify the signature of the JWT token to ensure it's really coming from your User Pool

    jwt.verify(token, pem, { issuer: iss }, function (err, payload) {
        if (err) {
            res.sendStatus(401, "Unauthorized").end()
        } else {
            //Valid token. Generate the API Gateway policy for the user
            //Always generate the policy on value of 'sub' claim and not for 'username' because username is reassignable
            //sub is UUID for a user which is never reassigned to another user.
            next()
        }
    });
}