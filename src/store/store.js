import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";
// import { persistStore,persistReducer } from "redux-persist";
// import storage from 'redux-persist/lib/storage'

// const persistConfig = {
//   key: 'root',
//   storage,
//   whitelist:['cart']
// }

// const persistedReducer = persistReducer(persistConfig,rootReducer)


const middleWares = [import.meta.env.DEV && logger].filter(Boolean)

export const store = configureStore({
  reducer:rootReducer,
  middleware:(middleware) => middleware().concat(middleWares)
})

// export const persistor =  persistStore(store)

