import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserList, setUserEmailList } from "../redux/slices/userListSlice";
function UserList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserList());
  }, [dispatch]);

  const { userListData, isLoading, userListError,emailList } = useSelector(
    (state) => state.userList
  );

  if (isLoading) {
    return <span>Data Loading...</span>;
  }
  if (Object.keys(userListError).length > 0) {
    return "Error Found";
  }
  function handleClick(){
    dispatch(setUserEmailList("abc@gmail.com"))
  }

  return (
    <>
      {userListData?.map((data) => {
        const { email, username, name } = data;
        return (
          <div key={email}>
            {name} - {username}
            <div>
                <button onClick={handleClick}>Add Value</button> { ' '} <p>Your Email - {emailList.map(mail=>mail)}</p>
            </div>
          </div>

        );
      })}
    </>
  );
}
export default UserList;
