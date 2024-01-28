import { BUY_CAR } from "./Constants";

const carInitialState = {
  numOfCars: 10,
};

const carReducer = (state = carInitialState, action) => {
  switch (action.type) {
    case BUY_CAR:
      return {
        ...state,
        numOfCars: state.numOfCars - 1,
      };
    default:
      return state;
  }
};

export default carReducer;
