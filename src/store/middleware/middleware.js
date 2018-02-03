import Action from '../actions/actions'
export default class Middleware {


    static asyncRegister(data) {
        console.log(data,"middleware")
        return (dispatch) => {
            dispatch(Action.setCurrentUser(data))
        }
    }
    static login(data) {

    }



}