export function login(token){
    
    return (dispatch)=>dispatch({
        type : "LOGIN_SUCCES",
        token :token
    })
}

export function logout(){
  
    return(dispatch) => dispatch({
        type : "LOGOUT_SCCESS"
    })
}