import React, { useEffect, useState } from 'react';
import Amplify, { Auth } from 'aws-amplify';
import Security from './Security.js';
import awsconfig from '../../aws-exports';

// one time configuration for authentication
if (!Amplify.Auth.userPool) {
    Amplify.configure(awsconfig);
}

const SecurityAuth = () => {
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
            {!cognitoUser ? <div>Redirecting...</div> : <Security />}
        </>
    )
}

export default SecurityAuth;