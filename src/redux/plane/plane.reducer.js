import { BUY_PLANE } from "./plane.constants";

const planeInitialState = {
  numOfPlanes: 20,
};
const planeReducer = (state = planeInitialState, action) => {
  switch (action.type) {
    case BUY_PLANE:
      return {
        ...state,
        numOfPlanes: state.numOfPlanes - action.payload,
      };

    default:
      return state;
  }
};

export default planeReducer;
