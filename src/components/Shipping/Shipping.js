import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Shipping = () => {
  const [user] = useAuthState(auth);

  return <div>User: {user?.displayName}</div>;
};

export default Shipping;
