import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData  } from './UsersSlice';



export function Users() {

  const dispatch = useDispatch();
  const users = useSelector((state) => state.usersStore.allUsers);
  const isLoading = useSelector((state) => state.usersStore.isLoading);
  const isError = useSelector((state) => state.usersStore.isError);




  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);


  const allUsers = users.users
  console.log(allUsers)

  return (
    <div>
    {isLoading && <p>Loading...</p>}
    {isError && <p>Something went wrong...</p>}
    {!allUsers ? (
      <p>No users</p>
    ) : (
      allUsers.map((user) => (
        <div key={user.id}>
          <p>{user.username}</p>
          <p>{user.email}</p>
        </div>
      ))
    )}
  </div>

  )
}

export default Users