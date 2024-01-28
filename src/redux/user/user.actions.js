import axios from "axios";
import {
  FETCH_USER_FAILURE,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
} from "./user.constants";

const fetchUserRequest = () => {
  return { type: FETCH_USER_REQUEST };
};
const fetchUserSuccess = (payload) => {
  return { type: FETCH_USER_SUCCESS, payload };
};
const fetchUserFailure = (payload) => {
  return { type: FETCH_USER_FAILURE, payload };
};

const fetchUsers = () => {
  return async (dispatch) => {
    dispatch(fetchUserRequest());
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users", {
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      dispatch(fetchUserSuccess(res?.data));
    } catch (error) {
      console.log("error?.message", error?.message);
      dispatch(fetchUserFailure(error?.message));
    }
  };
};

export { fetchUserRequest, fetchUserSuccess, fetchUserFailure, fetchUsers };


// const fetchUsers = () => {
//   return async (dispatch) => {
//     dispatch(fetchUserRequest());
//     try {
//       const res = await fetch("https://jsonplaceholder.typicode.com/users", {
//         method: "POST",
//         headers: {
//           "content-type": "application/json",
//           authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//         body: JSON.stringify({}),
//       });
//       dispatch(fetchUserSuccuss(res?.data));
//     } catch (error) {
//       console.log(error);
//       dispatch(fetchUserFailure(error?.message));
//     }
//   };
// };