
import Constant from '../../constant/constant'

var INITIAL_STATE = []
function reducerFunction(state = INITIAL_STATE, action) {
    switch (action) {

        case Constant.actionTypes.register: //register
            return state

        case Constant.actionTypes.login: //login
            return state

        default:
            return state


    }




}
export default reducerFunction;