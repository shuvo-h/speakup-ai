import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';

const useAuthFromCookie = () => {
    const router = useRouter();
    const [user,setUser] = useState({});
    const [isUserLoading,setIsUserLoading] = useState(true);

    // always use abort to cancel current useEffect operation if a new opeartion come before finishing the current operation and cleanup the hook using return
    useEffect(()=>{
        const controller = new AbortController();
        // if useEffect use any API fetch, let the fetch about the abort signale to let the fetch function to cancel the request if new request come before getting response from server. so cancel the old request and start new request
        // fetch(url,{method:"GET",signal:controller.signal,headers:{}}).then(res=>res.json())

        // currently using only to get cookie
        // export const getUserFromCookie = () => Cookies.get("user") ? JSON.parse(Cookies.get("user")) : {};
        setUser(Cookies.get("user") ? JSON.parse(Cookies.get("user")) : {})
        setIsUserLoading(false)

        // cleanup Hook
        return ()=>{
            controller.abort() // cancel the hook operation
        }
    },[])

    const removeCookie = () =>{
        setIsUserLoading(true);
        Cookies.remove('user');
        setUser({})
        setIsUserLoading(false);
        router.push("/login")
    }

    return {
        user,
        isUserLoading,
        setUser,
        setIsUserLoading,
        removeCookie
    };
};

export default useAuthFromCookie;