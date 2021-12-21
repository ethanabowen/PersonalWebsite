import React, { useEffect, useState } from 'react';
import Amplify, { Auth } from 'aws-amplify';
import { configureAmplify } from '../../Utilities/auth';
import { withAuthenticator } from '@aws-amplify/ui-react';
import Security from './Security.js';
import awsconfig from '../../aws-exports';


// one time configuration for authentication
if (!Amplify.Auth.userPool) {
    Amplify.configure(awsconfig);
    //configureAmplify();
}

const SecurityAuth = () => {
    const { user, setUser } = useState()

    return (
        <>
            !user ?
            <div className="App">
                <>{Auth.federatedSignIn({ provider: 'Google' })}</>

                { }
            </div> :
            <Security />
        </>

    )
}

export default SecurityAuth;