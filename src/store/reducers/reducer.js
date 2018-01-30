
import Constant from '../constant/constant'

var INITIAL_STATE = []
function reducerFunction(state = INITIAL_STATE, action) {
    switch (action) {

        case Constant.REGISTER: //register
            return state

        case Constant.LOGIN: //login
            return state

        default:
            return state


    }




}
export default reducerFunction;