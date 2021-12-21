import Amplify, { Auth } from 'aws-amplify';

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