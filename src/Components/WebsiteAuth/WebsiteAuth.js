import React, { useEffect, useState } from 'react';
import Amplify, { Auth } from 'aws-amplify';
import config from './config';

// one time configuration for authentication
if (!Amplify.Auth.userPool) {
    /*Amplify.configure(
        {
            Storage: {
                bucket: 'bowen-storage',
                region: 'us-east-1',
            }
        }
    )*/

    Amplify.configure({
        region: config.cognito.region,
        authenticationFlowType: 'USER_SRP_AUTH', //srp is safer compared to PASS AUTH
        userPoolId: config.cognito.userPoolId,
        userPoolWebClientId: config.cognito.appClientId,
        oauth: {
            domain: config.cognito.domainUrl,
            scope: config.cognito.scopes,
            redirectSignIn: config.cognito.redirectSignInUrl,
            redirectSignOut: config.cognito.redirectSignOutUrl,
            responseType: 'code' // REFRESH token generated with 'code'
        }
    });
}

/* Security page is locked down to a very specific set of allowed users with backend logic */
const WebsiteAuth = (props) => {
    const [cognitoUser, setCognitoUser] = useState();

    // Only using this approach to trigger a re-render
    // for when Amplify initializes 
    useEffect(() => {
        Auth.currentAuthenticatedUser().then(
            cognitoUser => {
                if (!cognitoUser) {
                    Auth.federatedSignIn({ provider: 'Google' }); //redirects to Google sign in
                } else {
                    setCognitoUser(cognitoUser)
                }
            }, error => {
                console.log(error);
                Auth.federatedSignIn({ provider: 'Google' }); //redirects to Google sign in
            })
    }, [])

    return (
        <>
            {!cognitoUser ? <div>Redirecting...</div> : props.children}
        </>
    )
}

export default WebsiteAuth;