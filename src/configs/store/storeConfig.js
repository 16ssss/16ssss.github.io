import {applyMiddleware, createStore} from 'redux';
import ReduxThunx from "redux-thunk";
import {persistReducer, persistStore} from "redux-persist";
import rootReducer from "../../services/reduces/rootReducer";
import storage from 'redux-persist/lib/storage/session';

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['hoverReducer']

}
const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
    let store = createStore(persistedReducer, applyMiddleware(ReduxThunx));
    let persistor = persistStore(store);
    return {store, persistor};
}