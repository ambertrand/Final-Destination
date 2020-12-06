import React from "react";
import Chat from "../components/shoppingChat/Chat.jsx";
import { useAuth0 } from '@auth0/auth0-react';

function Shopping({history}) {
    const { isAuthenticated } = useAuth0();
    React.useEffect(() => {
        // console.log(isAuthenticated);
        if (!isAuthenticated) {
            history.push("/")
        }
    }, [isAuthenticated, history]);
    
    return (
        <div>
            <Chat/>
        </div>
    )
}

export default Shopping;
