import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithPopup } = useAuth0();
  return (
    <div className="ml-auto">
    <button
      className="m-2"
      onClick={(event) => loginWithPopup()}
    >
      Log In
    </button>
    </div>
  );
};

export default LoginButton;