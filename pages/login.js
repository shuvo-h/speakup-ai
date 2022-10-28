import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import useAuthFromCookie from '../clientSide/hooks/useAuthFromCookie';
import { addInStateObj } from '../clientSide/utils/reactUtils/stateSetter';
import { envInfo } from '../server_side/utils/envInitializer';
import stylesLogReg from '../styles/loginReg.module.css';
import MainLayout from '../clientSide/components/common/MainLayout';
import { UserIcon } from '../clientSide/utils/Icons/IconRightMark';


const Login = () => {
    const router = useRouter();
    const [loginInfo,setLoginInfo] = useState({});
    const {user,isUserLoading} = useAuthFromCookie();

    const handleLogin = (e) =>{
        e.preventDefault();;
        
        // store the data to database
        fetch(`${envInfo.BACKEND_BASE_URI}/api/v1/auth/login`,{
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
        <MainLayout mainLayoutClassName={stylesLogReg.logReg_container}>
            <div className={`color-primary-dark ${stylesLogReg.logReg_wrapper}`}>
                <div  className={`${stylesLogReg.formFields}`}>
                    <div>
                        <div><UserIcon width={40} height={40} /> <p>Login</p></div>
                        <div><UserIcon width={40} height={40} /> <p>Register</p></div>
                    </div>
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
        </MainLayout>
    );
};

export default Login;