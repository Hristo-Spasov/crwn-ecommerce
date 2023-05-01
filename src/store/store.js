import { compose,legacy_createStore as createStore,applyMiddleware } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";
import { persistStore,persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
  blacklist:['user']
}

const persistedReducer = persistReducer(persistConfig,rootReducer)


const middleWares = [import.meta.env.DEV && logger].filter(Boolean)
const composedEnhancers = compose(applyMiddleware(...middleWares)) 


/*createStore takes 3 args 
1.reducer - A function that returns the next state tree, given the current state tree and the action to handle.
2.preloadedState
The initial state. You may optionally specify it to hydrate the state from the server in universal apps, or to restore a previously serialized user session. If you use combineReducers to produce the root reducer function, this must be an object with the same shape as combineReducers keys.
3.enhancer
The store enhancer. You may optionally specify it to enhance the store with third-party capabilities such as middleware, time travel, persistence, etc.
 */

export const store = createStore(persistedReducer,undefined,composedEnhancers)
export const persistor =  persistStore(store)

