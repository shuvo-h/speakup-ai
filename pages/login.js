import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import useAuthFromCookie from '../clientSide/hooks/useAuthFromCookie';
import { addInStateObj } from '../clientSide/utils/reactUtils/stateSetter';
import stylesLogReg from '../styles/loginReg.module.css';


const Login = () => {
    const router = useRouter();
    const [loginInfo,setLoginInfo] = useState({});
    const {user,isUserLoading} = useAuthFromCookie();

    const handleLogin = (e) =>{
        e.preventDefault();;
        
        // store the data to database
        fetch('/api/v1/auth/login',{
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(loginInfo)
        })
        .then(res=>res.json())
        .then(data=>{
            if (data.error) {
                alert(data.message)
            }else{
                // store the token to cookie
                Cookies.set('user',JSON.stringify(data),{expires:(1/1440)*24*60})       // (1/1400)=1 min
                router.push({pathname:"/dashboard"})
            }
        })
    
    }

    if (isUserLoading) {
        return <p>Loading...........</p>
    }
    if (user?.token) {
        router.push({pathname:"/"});
    }

    return (
        <div className={`color-primary-dark ${stylesLogReg.logReg_container}`}>
            <div  className={`${stylesLogReg.formFields}`}>
                <form onSubmit={handleLogin}>
                    <div className={`d-flex justifyBetween`}>
                        <label htmlFor="">Email Address:</label>
                        <input className={`color-primary-dark`} onChange={(e)=>addInStateObj(setLoginInfo,e.target.name,e.target.value)} name='email' placeholder='write your email address'  type="email" required/>
                    </div>
                    <div className={`d-flex justifyBetween`}>
                        <label htmlFor="">Password:</label>
                        <input className={`color-primary-dark`} onChange={(e)=>addInStateObj(setLoginInfo,e.target.name,e.target.value)} name='password' type="password" placeholder='Type a password' required/>
                    </div>
                    <button type="submit">Sign Up</button>
                </form>
            </div>
        </div>
    );
};

export default Login;