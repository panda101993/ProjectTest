import { combineReducers } from "redux";

// import cartReducer from "./components/Cart/Cart.reducer";
import empDetailsReducer from "./empDetails.reducer";

const rootReducer = combineReducers({
  empDetails: empDetailsReducer,
//   cart: cartReducer,
});

export default rootReducer;