const initialState={
    token :""
}
export default function reducer(state=initialState , action){
    switch(action.type){
        case "LOGIN_SUCCES":
        return {
            token : action.token
        }
        case "LOGOUT_SCCESS":
        console.log("test")
        return initialState
        default :
        return state
    }
}