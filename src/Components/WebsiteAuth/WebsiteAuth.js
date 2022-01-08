import React, { useEffect, useState } from 'react';
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from '../../aws-exports';

// one time configuration for authentication
if (!Amplify.Auth.userPool) {
    Amplify.configure(awsconfig);
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