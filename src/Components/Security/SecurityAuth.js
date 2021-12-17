import React, { useEffect, useState } from 'react';
import Amplify, { Auth } from 'aws-amplify';
import { configureAmplify } from '../../Utilities/auth';
import Security from './Security.js';


// one time configuration for authentication
if (!Amplify.Auth.userPool) {
    configureAmplify();
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
            })
    }, [])

    return <>
        {!cognitoUser
            ? <div>Redirecting...</div>
            : Auth.user ?
                <Security />
                : <div>hello!</div>
        }
    </>
}

export default SecurityAuth;