import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import useAuthFromCookie from '../../hooks/useAuthFromCookie';

const PrivateComponent = ({children}) => {
    const router = useRouter();
    const {user,isUserLoading} = useAuthFromCookie();
    
    // return if user is not logged in 
    if (isUserLoading || !router) {
        return <h2>Loading.........</h2>
    }
   
    if (!isUserLoading && !user.token) {
        router.push({pathname:"/login"})
    }

    if (user.token) {
        return children;
    }

    return <h2>Loading.........</h2>
};

export default PrivateComponent;