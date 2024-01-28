import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCar } from "../redux/car/Actions";
const Car = () => {
  const carState = useSelector((state) => state.car);
  console.log({ carState });
  const dispatch = useDispatch();
  const buyCarHandler = useCallback(() => {
    dispatch(buyCar());
  }, [dispatch]);
  return (
    <>
      <div>Car</div>
      <h2>num of car {carState?.numOfCars}</h2>
      <button onClick={buyCarHandler}>buy car</button>
    </>
  );
};

export default Car;
