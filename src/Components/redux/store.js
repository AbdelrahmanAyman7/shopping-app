
import { createStore, applyMiddleware } from "redux";
import index from '../redux/reducers/index'
import Logger from "redux-logger";
import { persistStore } from "redux-persist";
import { composeWithDevTools } from "redux-devtools-extension";


export const Store = createStore(
  index,
  composeWithDevTools(applyMiddleware(Logger))
);
export const presistor = persistStore(Store);