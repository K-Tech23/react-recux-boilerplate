import Constant from '../../constant/constant'

export default class Action {

    static register(date){
        return{
            type :Constant.actionTypes.register,
            payload :data
        }
    }

    static login(date){
        return{
            type :Constant.actionTypes.login,
            payload :data
        }
    }



}