import Cookies from 'js-cookie';
import NavLink from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import useAuthFromCookie from '../clientSide/hooks/useAuthFromCookie';
import { addInStateObj } from '../clientSide/utils/reactUtils/stateSetter';
import { envInfo } from '../server_side/utils/envInitializer';
import stylesLogReg from '../styles/loginReg.module.css';
import MainLayout from '../clientSide/components/common/MainLayout';
import { RegisterIcon, UserIcon } from '../clientSide/utils/Icons/IconRightMark';
import LoaderAlterat from '../clientSide/components/Loaders/LoaderAlterat/LoaderAlterat';
import SimpleLoader from '../clientSide/components/Loaders/simpleLoader/SimpleLoader';


const Login = () => {
    const router = useRouter();
    const {user,isUserLoading} = useAuthFromCookie();
    const [loginInfo,setLoginInfo] = useState({});
    const [isLoginLoading,setIsLoginLoading] = useState(false);

    const handleLogin = (e) =>{
        e.preventDefault();;
        setIsLoginLoading(true)
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
            setIsLoginLoading(false);
        })
    
    }

    if (isUserLoading) {
        return <div className='d-flex justifyCenter alignCenter' style={{height:"100vh"}}><SimpleLoader></SimpleLoader></div>
    }
    if (user?.token) {
        router.push({pathname:"/"});
    }

    return (
        <MainLayout mainLayoutClassName={stylesLogReg.logReg_container}>
            <div className={`color-primary-dark ${stylesLogReg.logReg_wrapper}`}>
                
                <div  className={`${stylesLogReg.formFields}`}>
                    <div className={`${stylesLogReg.logReg_btns}`}>
                        <NavLink href={"/login"} passHref={true}>
                            <a style={{backgroundColor:"var(--logReg_active_bg)", color:"var(--logReg_active_color)"}}><UserIcon width={22} height={22} /> <p className='m-0'>Login</p></a>
                        </NavLink>
                        <NavLink href={"/registration"} passHref={true}>
                            <a><RegisterIcon width={25} height={25} fill='#000' /> <p className='m-0'>Register</p></a>
                        </NavLink>
                    </div>
                    <form onSubmit={handleLogin}>
                        <h5 className='text-center m-5'>Login Here</h5>
                        <input 
                            className={`color-primary-dark`} 
                            onChange={(e)=>addInStateObj(setLoginInfo,e.target.name,e.target.value)} 
                            name='email' 
                            placeholder='Email'  
                            type="email" 
                            required
                        />
                        <input 
                            className={`color-primary-dark`} 
                            onChange={(e)=>addInStateObj(setLoginInfo,e.target.name,e.target.value)} 
                            name='password' 
                            type="password" 
                            placeholder='Password' 
                            required
                        />
                        {
                            isLoginLoading ? <div style={{margin:"0 auto"}}> <LoaderAlterat /> </div> : <button type="submit">login</button>
                        }
                        
                    </form>
                </div>
            </div>
        </MainLayout>
    );
};

export default Login;