import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import MainLayout from '../../../client_side/components/common/MainLayout';
import PackageSelected from '../../../client_side/components/payment/PackageSelected';
import PrivateComponent from '../../../client_side/components/ProtectedComponents/PrivateComponent';
import useAuthFromCookie from '../../../client_side/hooks/useAuthFromCookie';


const PaymentForm = () => {
    const router = useRouter();
    const {package_id,duration} = router.query;
    const {user,isUserLoading} = useAuthFromCookie();
    const [selectedPackage,setSelectedPackage] = useState({});
    console.log(selectedPackage,"selectedPackage",{package_id,duration});

    

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


    
    return (
        <MainLayout>
            <PrivateComponent>
                <h1>Thi payment details show page Page</h1>
                <div>
                    <PackageSelected selectedPackage={selectedPackage}></PackageSelected>
                </div>
            </PrivateComponent>
        </MainLayout>
    );
};

export default PaymentForm;

