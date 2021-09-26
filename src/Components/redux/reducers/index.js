import { combineReducers } from "redux";
import { productReducer,selectedProductReducer, shopReducer } from "./productReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
const persistConfig = {
  key: "root",
  storage,
  whiteList: ["","allProducts","product", "shop", ],
};

const rootReducer = combineReducers({
  allProducts: productReducer,
  product: selectedProductReducer,
  shop: shopReducer,
  
});
export default persistReducer(persistConfig, rootReducer);
