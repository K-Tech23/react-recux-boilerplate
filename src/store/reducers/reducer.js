
import Constant from '../constant/constant'

var INITIAL_STATE =
    {
        loginUser : null,
        loading : false
    }
function reducerFunction(state = INITIAL_STATE, action) {
    console.log(action, "reducer calling")
    switch (action) {

        case Constant.USER_LOGIN: //login user
        console.log("user login")
            return { ...state, loginUser: action.payload }

        case Constant.REGISTER: //register
            return state
        case Constant.LOGIN: //login
            return state

        default:
            return state


    }




}
export default reducerFunction;