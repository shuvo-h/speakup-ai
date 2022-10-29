import { useRouter } from 'next/router';
import NavLink from 'next/link';
import React, { useState } from 'react';
import MainLayout from '../clientSide/components/common/MainLayout';
import SimpleLoader from '../clientSide/components/Loaders/simpleLoader/SimpleLoader';
import useAuthFromCookie from '../clientSide/hooks/useAuthFromCookie';
import { addInStateObj } from '../clientSide/utils/reactUtils/stateSetter';
import { envInfo } from '../server_side/utils/envInitializer';
import stylesLogReg from '../styles/loginReg.module.css';
import { RegisterIcon, UserIcon } from '../clientSide/utils/Icons/IconRightMark';
import LoaderAlterat from '../clientSide/components/Loaders/LoaderAlterat/LoaderAlterat';

const Registration = () => {
    const router = useRouter();
    const {user,isUserLoading} = useAuthFromCookie();
    const [regInfo,setRegInfo] = useState({});
    const [isRegLoading,setIsRegLoading] = useState(false);

    const handleRegistration = (e) =>{
        e.preventDefault();
        if (regInfo.password === regInfo.confirmPassword) {
            setIsRegLoading(true)
            // store the data to database
            fetch(`${envInfo.BACKEND_BASE_URI}/api/v1/auth/registration`,{
                method:"POST",
                headers:{"content-type":"application/json"},
                body:JSON.stringify(regInfo)
            })
            .then(res=>res.json())
            .then(data=>{
                if (data.error) {
                    alert(data.message)
                }else{
                    alert("Registration Successful!");
                    router.push({pathname:"/login"})
                }
                setIsRegLoading(false);
            })
        }else{
            alert("Password didn't match!");
        }
    }

    if (isUserLoading) {
        return <div className='d-flex justifyCenter alignCenter' style={{height:"100vh"}}><SimpleLoader></SimpleLoader></div>
    }
    if (!isUserLoading && user.token) {
        router.push("/");
        return <></>
    }

    return (
        <MainLayout mainLayoutClassName={stylesLogReg.logReg_container}>
            <div className={`color-primary-dark ${stylesLogReg.logReg_wrapper}`}>
                
                <div  className={`${stylesLogReg.formFields}`}>
                    <div className={`${stylesLogReg.logReg_btns}`}>
                        <NavLink href={"/login"} passHref={true}>
                            <a><UserIcon width={30} height={30} fillIcon='blue' fill='lightgrey' /> <p className='m-0'>Login</p></a>
                        </NavLink>
                        <NavLink href={"/register"} passHref={true}>
                            <a style={{backgroundColor:"var(--logReg_active_bg)", color:"var(--logReg_active_color)"}}><RegisterIcon width={25} height={25} fill='#fff' /> <p className='m-0'>Register</p></a>
                        </NavLink>
                    </div>
                    <form onSubmit={handleRegistration}>
                        <h5 className='text-center m-5'>Register Here</h5>
                        <input className={`color-primary-dark`} onChange={(e)=>addInStateObj(setRegInfo,e.target.name,e.target.value)} name='name' type='text' placeholder='Full name' required />
                        <input className={`color-primary-dark`} onChange={(e)=>addInStateObj(setRegInfo,e.target.name,e.target.value)} name='email' placeholder='Email'  type="email" required/>
                        <input className={`color-primary-dark`} onChange={(e)=>addInStateObj(setRegInfo,e.target.name,e.target.value)} name='password' type="password" placeholder='Password' required/>
                        <input className={`color-primary-dark`} onChange={(e)=>addInStateObj(setRegInfo,e.target.name,e.target.value)} name='confirmPassword' type="password" placeholder='Re-type password' required />
                        {
                            isRegLoading ? <div style={{margin:"0 auto"}}> <LoaderAlterat /> </div> : <button type="submit">Sign up</button>
                        }
                        
                    </form>
                </div>
            </div>
        </MainLayout>
    );

};

export default Registration;