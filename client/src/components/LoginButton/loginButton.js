import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

class loginButton extends React.Component {

  render() {
    return () => {
      const { loginWithRedirect } = useAuth0();
      console.log(this.componentDidMount())
      return <button onClick={() => loginWithRedirect()}>Log In</button>;
    }
  }





}




export default loginButton;