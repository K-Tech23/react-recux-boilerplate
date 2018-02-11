import Constant from '../constant/constant'

export default class Action {
    static isUserLogin(user){
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
    static setCurrentUser(data){
        console.log(data,"action called")
        return {
            type:Constant.CURRENT_USER,
            payload : data
        }
    }
    static logout(data){
        console.log(data,"action called")
        return {
            type:Constant.USER_LOGOUT,
            payload : data
        }
    }




}