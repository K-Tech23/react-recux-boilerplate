import Constant from '../constant/constant'

export default class Action {
    static setCurrentUser(user){
        console.log(user,"action called")
        return {
            type:Constant.USER_LOGIN,
            payload : user
        }
    }
    static setCurrentPage(page){
        console.log(page,"action called")
        return {
            type:Constant.CURRENT_PAGE,
            payload : page
        }
    }




}