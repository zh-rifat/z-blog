export const LoginStart=(userCredentials)=>({
    type: "LOGIN_START"
});


export const LoginSuccess=(user)=>({
    type:"LOGIN_SUCCESS"
});

export const LoginFailure=()=>({
    type: "LOGIN_FAILURE"
});

export const UpdateUser=()=>({
    type: "UPDATE_USER"
})

export const Logout=()=>({
    type:"LOGOUT"
})


