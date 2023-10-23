import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "../styles/Userinfo.css";

const UserInfo = () => {
  const navigate = useNavigate();
/*   const user = useSelector((state) => state.loginStore.currentUser);
  const avatar = useSelector((state) => state.loginStore.avatar); */
  const user = localStorage.getItem("user");
  const avatar = localStorage.getItem("avatar");
  
  console.log(user);
  console.log(avatar); 


  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }
  , [user]
  );




  return (
    <main className="userinfo-container">
      <h1> Logged as {user}</h1>
      <img src={avatar} />
    </main>
  );
};

export default UserInfo;
