import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import NavLink from "next/link";
import payST from "../../../styles/Payment.module.css"
import MainLayout from '../../../client_side/components/common/MainLayout';
import PackageSelected from '../../../client_side/components/payment/PackageSelected';
import PrivateComponent from '../../../client_side/components/ProtectedComponents/PrivateComponent';
import useAuthFromCookie from '../../../client_side/hooks/useAuthFromCookie';
import { RightArrowIcon } from '../../../client_side/utils/Icons/IconRightMark';
import PaySubNav from '../../../client_side/components/payment/PaySubNav';


const PaymentForm = () => {
    const router = useRouter();
    const {package_id,duration} = router.query;
    const {user,isUserLoading} = useAuthFromCookie();
    const [selectedPackage,setSelectedPackage] = useState({});
    // console.log(selectedPackage,"selectedPackage",{package_id,duration});
    
    const paymentPageStepShow = [
        {name:"package",pathname:`/payment/${package_id}?duration=${duration}`, icon: <RightArrowIcon width={30} height={30} />, diable:false},
        {name:"purchase order",pathname:"", icon: <RightArrowIcon/>, diable:true},
        {name:"payment",pathname:"", diable:true},
    ]
    

    useEffect(()=>{
        const asyncFetch = async() =>{
            const packageResult = await fetchPackageByID(package_id,duration);
            if (packageResult?.data) {
                setSelectedPackage({...packageResult.data});
            }else if(packageResult?.error){
                alert(packageResult.message);
            }
        }
        asyncFetch();
    },[package_id])

    
   

    const fetchPackageByID = async(packageID,duration="") =>{
        if (!packageID) {return;}
        try {
            const packageRes = await fetch(`/api/v1/package/${packageID}?duration=${duration??""}`);
            return await packageRes.json();
        } catch (error) {
            console.log(error);
            return error;
        }
    }


    if(!router.isReady || isUserLoading){
        return <p>Loading.........</p>
    }
    if (!package_id || !duration) {
        router.push({pathname:"/pricing"})
    }

    return (
        <MainLayout>
            <PrivateComponent>
                <div>
                    <PaySubNav paymentPageStepShow={paymentPageStepShow}></PaySubNav>
                    <div>
                        <PackageSelected selectedPackage={selectedPackage}></PackageSelected>
                    </div>
                    <div style={{minHeight:"10rem"}}>
                        {/* add here more sections  */}
                    </div>
                </div>
            </PrivateComponent>
        </MainLayout>
    );
};

export default PaymentForm;

