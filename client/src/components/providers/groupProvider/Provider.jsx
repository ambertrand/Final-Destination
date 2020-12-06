import React, {useMemo, useState} from 'react';
import groupContext from "./context";

const groupProvider = ({user, children}) => {
    const [groupNames, setGroupNames] = useState({});
    const memoizedValue = useMemo(() => ({
        groupNames,
        setGroupNames
        // will return object with key value pairs
    }), [groupNames, setGroupNames])
    // only update if either of above 2 objects change
    const userInfo = useMemo(() => ({
        groupNames: name
    }))
    return (
        <groupContext.Provider value={userInfo}>
            {children}
        </groupContext.Provider>
    )
}

export default groupProvider;