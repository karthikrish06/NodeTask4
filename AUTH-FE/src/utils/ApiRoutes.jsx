const ApiRoutes = {
    SIGNIN : {
         path : '/user/login',
         authenticate : false
    },
    SIGNUP : {
        path : '/user/createUser',
        authenticate : false
    },
    FORGOTPASSWORD : {
        path : '/user/forgotPassword',
        authenticate : false
    },
    VERIFYCODE : {
        path : '/user/verifyCode',
        authenticate : false
    },
    UPDATEPASSWORD : {
        path: '/user/updatePassword',
        authenticate: false
    },
    GETALLUSERS : {
        path : '/user',
        authenticate : true
    }
}

export default ApiRoutes