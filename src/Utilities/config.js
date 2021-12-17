const config = {
    cognito: {
        region: process.env.REACT_APP_COGNITO_REGION,
        userPoolId: process.env.REACT_APP_COGNITO_USER_POOL_ID,
        appClientId: process.env.REACT_APP_COGNITO_APP_CLIENT_ID,
        scopes: buildScopes(),
        domainUrl: process.env.REACT_APP_COGNITO_DOMAIN_URL,
        redirectSignInUrl: process.env.REACT_APP_COGNITO_REDIRECT_SIGNIN_URL,
        redirectSignOutUrl: process.env.REACT_APP_COGNITO_REDIRECT_SIGNOUT_URL
    }
}

function buildScopes() {
    var scopes = []
    if (process.env.REACT_APP_COGNITO_SCOPE_EMAIL === "true") {
        scopes.push("email")
    }
    if (process.env.REACT_APP_COGNITO_SCOPE_OPENID === "true") {
        scopes.push("openid")
    }
    /*if (process.env.REACT_APP_COGNITO_SCOPE_AWS_ADMIN === "true") {
        scopes.push("aws.cognito.signin.user.admin")
    }*/
    return scopes
}

module.exports = config;