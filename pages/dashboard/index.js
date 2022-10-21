import React, { useEffect } from 'react';
import MainLayout from '../../client_side/components/common/MainLayout';
import PrivateComponent from '../../client_side/components/ProtectedComponents/PrivateComponent';
import useAuthFromCookie from '../../client_side/hooks/useAuthFromCookie';
import dashST from "../../styles/dashboard.module.css";

const DashboardHome = () => {
    const {user,isUserLoading} = useAuthFromCookie();
    console.log(user);
    // load user convert card info
    useEffect(()=>{
        
    },[])

    if (isUserLoading) {
        return <p>Loading..............</p>
    }
    return (
        <div>
            <MainLayout>
                <PrivateComponent>
                   <div className={dashST.user_status_card}>
                        <h3>{user.name}</h3>

                   </div>
                </PrivateComponent>
            </MainLayout>
        </div>
    );
};

export default DashboardHome;

/*
    1. account status: available char limit, req limit
    2. total convert file, size
*/