import Constant from '../constant/constant'

export default class Action {
    static setCurrentUser(user){
        console.log(user,"action called")
        return {
            type:Constant.USER_LOGIN,
            payload : user
        }
    }

    // static signup(date){
    //     return{
    //         type :Constant.REGISTER,
    //         payload :data
    //     }
    // }

    // static login(date){
    //     return{
    //         type :Constant.LOGIN,
    //         payload :data
    //     }
    // }



}