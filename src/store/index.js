import { createStore, combineReducers} from "redux";
import reducerTask from './reducer'

let reducers = combineReducers({
    reducerTask: reducerTask
   
});

let store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

window.store = store;

export default store;