import Amplify, { Auth } from 'aws-amplify';

import config from './config';

export const ROLES = ['Admin', 'Tax Researcher', 'Tax Researcher Intern', 'Sales'];
const COGNITO_SIGNIN_BUTTON_TEXT = "VertexAzureADSignIn";

export function configureAmplify() {
    //Amplify custom configuration
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

export async function validateSession() {
    await Auth.currentAuthenticatedUser().then(
        user => {
            if (!user) {
                Auth.federatedSignIn({ provider: 'Google' }); //redirects to Google sign in
            }

        }, error => {
            console.log(error);
        })
}

export function getUser() {
    return Auth.user;
}

export function getEmail() {
    return Auth.user.attributes.email;
}

export function getName() {
    return Auth.user.attributes.name;
}

export const signOut = () => Auth.signOut()