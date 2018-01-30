import {createStore,applyMiddleware} from 'redux'
import reducer from './reducers/reducer'
import thunk from 'redux-thunk'
const middleware = applyMiddleware(thunk)
let store = createStore(reducer,middleware);


store.subscribe(()=>{

    console.log(store.getState(),"store")

})
export default store;