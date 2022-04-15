import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const UserProfileThumb = () => {
  const [user] = useAuthState(auth);

  return (
    <button
      className="border-0 text-center w-10 h-10 rounded-full bg-slate-700"
      title={user ? user.displayName : "User"}
    >
      {user ? (
        <img
          src={user.photoURL}
          className="w-full h-full rounded-full"
          alt={user.displayName}
          title={user.displayName}
        />
      ) : (
        user?.email.slice(0, 1)
      )}
      {/* <img className="w-full h-full rounded-full" alt="" /> */}
    </button>
  );
};

export default UserProfileThumb;
