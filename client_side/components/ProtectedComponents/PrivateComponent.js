import React, { useEffect } from 'react';
import useAuthFromCookie from '../../hooks/useAuthFromCookie';

const PrivateComponent = ({children}) => {
    const {user,isUserLoading} = useAuthFromCookie();
    
    // return if user is not logged in 
    if (isUserLoading) {
        return <h2>Loading.........</h2>
    }
   
    if (!isUserLoading && !user.token) {
        router.push({pathname:"/login"})
    }

    return children;

    
};

export default PrivateComponent;