import React, { useEffect } from "react";
import CartPage from "./CartPage";
import { useAuthContext } from "../contexts/AuthContext";
import { useCommentContext } from "../contexts/CommentContext";

const ProfilePage = () => {
  const { user } = useAuthContext();
  console.log(user);
  const { comment, getComment } = useCommentContext();

  //   useEffect(() => {
  //     getComment();
  //   }, []);

  return (
    <div className="container-profile">
      {user && (
        <img
          style={{ borderRadius: "50%", height: "190px" }}
          src={user.photoURL}
          width={50}
          alt=""
        />
      )}

      {user && <h1>{user.displayName}</h1>}
      {user && <h5>{user.email}</h5>}
      {user && <span>0 подписок</span>}

      <h2>Сохраненные</h2>

      {user && <CartPage />}
      {!user && <h3>Зарегестрируйся</h3>}
    </div>
  );
};

export default ProfilePage;
