import rootReducer from './reducers/index';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

export const initStore = (initialState) => {
    let composeEnhancers = compose;
    if (typeof window !== 'undefined') {
        // Setup Redux Debuger
        composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    }

    const persistConfig = {
      key: 'root',
      storage,
    }

    const persistedReducer = persistReducer(persistConfig, rootReducer)

    const store = createStore(persistedReducer, initialState, composeEnhancers(
        applyMiddleware(thunk) // Applying redux-thunk middleware
    ));
    store.__PERSISTOR = persistStore(store);

    return store;
};
