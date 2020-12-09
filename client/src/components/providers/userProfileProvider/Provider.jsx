import React, {useMemo, useState} from 'react';
import userProfileContext from "./context";

const UserProfileProvider = ({user, children}) => {
    // const [userProfile, setUserProfile] = useState({});
    // const memoizedValue = useMemo(() => ({
    //     userProfile,
    //     setUserProfile
    //     // will return object with key value pairs
    // }), [userProfile, setUserProfile])
    // only update if either of above 2 objects change
    const userInfo = useMemo(() => ({
        userProfile: user
    }))
    return (
        <userProfileContext.Provider value={userInfo}>
            {children}
        </userProfileContext.Provider>
    )
}

export default UserProfileProvider;