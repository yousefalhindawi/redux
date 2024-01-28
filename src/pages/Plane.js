import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyPlane } from "../redux/plane/plane.actions";
const Plane = () => {
  const planeState = useSelector((state) => state.plane);
  const dispatch = useDispatch();
  const buyPlaneHandler = useCallback(() => {
    dispatch(buyPlane(5));
  }, [dispatch]);
  return (
    <>
      <div>Plane</div>
      <h2>num of planes {planeState?.numOfPlanes}</h2>
      <button onClick={buyPlaneHandler}>buy plane</button>
    </>
  );
};

export default Plane;
