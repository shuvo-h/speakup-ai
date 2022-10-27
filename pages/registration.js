import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { addInStateObj } from '../clientSide/utils/reactUtils/stateSetter';
import { envInfo } from '../server_side/utils/envInitializer';
import stylesLogReg from '../styles/loginReg.module.css';

const Registration = () => {
    const router = useRouter();
    const [regInfo,setRegInfo] = useState({});

    const handleRegistration = (e) =>{
        e.preventDefault();
        
        if (regInfo.password === regInfo.confirmPassword) {
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
            })
        }else{
            alert("Password didn't match!");
        }
    }

    return (
        <div className={`color-primary-dark ${stylesLogReg.logReg_container}`}>
            <div  className={`${stylesLogReg.formFields}`}>
                <form onSubmit={handleRegistration}>
                    <div className={`d-flex justifyBetween`}>
                        <label htmlFor="">Full Name:</label>
                        <input className={`color-primary-dark`} onChange={(e)=>addInStateObj(setRegInfo,e.target.name,e.target.value)} name='name' type='text' placeholder='write your name' required />
                    </div>
                    <div className={`d-flex justifyBetween`}>
                        <label htmlFor="">Email Address:</label>
                        <input className={`color-primary-dark`} onChange={(e)=>addInStateObj(setRegInfo,e.target.name,e.target.value)} name='email' placeholder='write your email address'  type="email" required/>
                    </div>
                    <div className={`d-flex justifyBetween`}>
                        <label htmlFor="">Password:</label>
                        <input className={`color-primary-dark`} onChange={(e)=>addInStateObj(setRegInfo,e.target.name,e.target.value)} name='password' type="password" placeholder='Type a password' required/>
                    </div>
                    <div className={`d-flex justifyBetween`}>
                        <label htmlFor="">Confirm Password:</label>
                        <input className={`color-primary-dark`} onChange={(e)=>addInStateObj(setRegInfo,e.target.name,e.target.value)} name='confirmPassword' type="password" placeholder='Re-type your password' required />
                    </div>
                    <button type="submit">Sign Up</button>
                </form>
            </div>
        </div>
    );
};

export default Registration;