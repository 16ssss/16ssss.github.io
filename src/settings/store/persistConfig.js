import storage from 'redux-persist/lib/storage'
import {persistReducer, persistStore} from "redux-persist";
import rootReducer from "../../modules";
import {applyMiddleware, createStore} from "redux";
import ReduxThunx from "redux-thunk";

const persistConfig = {
    key: 'root',
    storage,

}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
    let store = createStore(persistedReducer, applyMiddleware(ReduxThunx));
    let persist = persistStore(store);
    return {store, persist};
}