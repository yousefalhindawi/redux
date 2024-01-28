import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/user/user.actions";

const User = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  const usersState = useSelector((state) => state.user);
  return (
    <>
      <h2>Users</h2>
      <ul>
        {usersState?.users?.length > 0 &&
          usersState?.users?.map((user) => (
            <li key={user?.id}>
              {user?.id}- {user?.name} - {user?.email}
            </li>
          ))}
      </ul>
      {usersState?.error && <div style={{ color:"#f00" }}>{usersState?.error}</div>}
    </>
  );
};

export default User;
