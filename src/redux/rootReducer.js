import { combineReducers } from "redux";
import carReducer from "./car/Reducers";
import planeReducer from "./plane/plane.reducer";
import userReducer from "./user/user.reducer";
const rootReducer = combineReducers({
  car: carReducer,
  plane: planeReducer,
  user: userReducer,
});
export default rootReducer;
