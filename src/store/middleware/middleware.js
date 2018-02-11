import Action from '../actions/actions'
export default class Middleware {


    static asyncIsUserLogin(data) {
        console.log(data,"middleware")
        return (dispatch) => {
            dispatch(Action.isUserLogin(data))
        }
    }
    static asyncCurrentPage(page) {
        console.log(page,"middleware")
        return (dispatch) => {
            dispatch(Action.setCurrentPage(page))
        }
    }
    static asyncCurrentUser(data) {
        console.log(data,"middleware")
        return (dispatch) => {
            dispatch(Action.setCurrentUser(data))
        }
    }
    static asyncLogout(data) {
        console.log(data,"middleware")
        return (dispatch) => {
            dispatch(Action.logout(data))
        }
    }
 



}