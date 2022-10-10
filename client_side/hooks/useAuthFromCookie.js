import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

const useAuthFromCookie = () => {
    const [user,setUser] = useState({});
    const [isUserLoading,setIsUserLoading] = useState(true);

    useEffect(()=>{
        // export const getUserFromCookie = () => Cookies.get("user") ? JSON.parse(Cookies.get("user")) : {};
        setUser(Cookies.get("user") ? JSON.parse(Cookies.get("user")) : {})
        setIsUserLoading(false)
    },[])

    return {
        user,
        isUserLoading,
        setUser,
        setIsUserLoading
    };
};

export default useAuthFromCookie;