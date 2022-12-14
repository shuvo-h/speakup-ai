import Image from 'next/image';
import NavLink from "next/link";
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import purchaseSuccessImg from "../../../clientSide/assets/card/purchase_success.png";
import MainLayout from '../../../clientSide/components/common/MainLayout';
import PrivateComponent from '../../../clientSide/components/ProtectedComponents/PrivateComponent';
import useAuthFromCookie from '../../../clientSide/hooks/useAuthFromCookie';
import { cookieSetConvertCard } from '../../../clientSide/utils/cookieUtils/setCookies';
import { envInfo } from '../../../server_side/utils/envInitializer';
import paymentST from "../../../styles/Payment.module.css";


const Confirm = () => {
    const router = useRouter();
    const {user,isUserLoading} = useAuthFromCookie();
    const [isLoading,setIsloading] = useState(true);
    const [errMessage,setErrMessage] = useState("");
    const [confiemStatus,setConfiemStatus] = useState(false);
    const {payment_intent,redirect_status,package_id} = router.query;
// console.log(router.query);

    useEffect(()=>{
        const abortController = new AbortController();
        if (redirect_status && payment_intent && user.token) {
            setIsloading(true)
            // fetch the payment_intent id to database update thaat payment is complete and active the package
            fetch(`${envInfo.BACKEND_BASE_URI}/api/v1/payment/methods/stripe/${payment_intent}`,{
                method:"POST",
                signal: abortController.signal,
                headers:{
                    'content-type':"application/json",
                    'authorization':`Bearer ${user.token}`
                },
                body:JSON.stringify({package_id,payment_intent})
            })
            .then(res =>res.json())
            .then(data =>{
                console.log(data);
                if (data.card === 'ok') {
                    // set the card info to state and cookie
                    cookieSetConvertCard(data);
                    setConfiemStatus(true)
                }else{
                    alert(data.message??"Something went wrong!")
                }
            })
            .catch(err=>{
                console.log(err);
            })
            .finally(()=>setIsloading(false))
        }
        
        return () =>{ abortController.abort()}
    },[user.token,payment_intent])

    return (
        <MainLayout>
             <PrivateComponent>
                {/* <h1>Your Purchase is Status</h1> */}
                {
                    confiemStatus 
                        ?    <div className={`d-flex justifyCenter`}>
                                <div className={paymentST.purchase_success_card}>
                                    <div className={`d-flex justifyCenter`}>
                                        <Image src={purchaseSuccessImg} width={250} height={200} alt="payment successful"></Image>
                                    </div>
                                    <div className={`text-center ${paymentST.purchase_card_content}`}>
                                        <h2 className={`p-1`}>Purchase Successful</h2>
                                        <p>Your payment was successful! you can now continue using SpeakUP_AI</p>
                                    </div>
                                    <div className={`text-center ${paymentST.purchase_card_content}`}>
                                        <NavLink href={`/dashboard/purchases`} passHref={true}><button className={`p-4`}>Go to Dashboard</button></NavLink>
                                        
                                    </div>
                                </div>
                            </div>
                        :   <div><h3>Loading........</h3></div>
                }
                
             </PrivateComponent>
        </MainLayout>
    );
};

export default Confirm;