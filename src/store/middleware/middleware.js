import Action from '../actions/actions'
export default class Middleware {


    static asyncCurrentUser(data) {
        console.log(data,"middleware")
        return (dispatch) => {
            dispatch(Action.setCurrentUser(data))
        }
    }
    static asyncCurrentPage(page) {
        console.log(page,"middleware")
        return (dispatch) => {
            dispatch(Action.setCurrentPage(page))
        }
    }
    static login(data) {

    }



}