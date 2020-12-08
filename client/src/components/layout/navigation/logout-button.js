import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import Col from "react-bootstrap/esm/Col";

const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
    
        
        <Col sm={12} md={3} className="navigation-sub">
          <button
            className=""
            onClick={() =>
              logout({
                returnTo: window.location.origin,
              })
            }
          >
            Log Out
          </button>
        </Col>
  );
};

export default LogoutButton;