import React, { useEffect, useState } from 'react';
import MainLayout from '../../client_side/components/common/MainLayout';
import ConvertCard from '../../client_side/components/dashboard/ConvertCard';
import PrivateComponent from '../../client_side/components/ProtectedComponents/PrivateComponent';
import useAuthFromCookie from '../../client_side/hooks/useAuthFromCookie';
import dashST from "../../styles/dashboard.module.css";

const DashboardHome = () => {
    const {user,isUserLoading} = useAuthFromCookie();
    const [convertCard,setConvertCard] = useState({});
    const [convertCardErrLoad,setConvertCardErrLoad] = useState({isLoading:true,msg:""});

    console.log(convertCard,convertCardErrLoad);
    // load user convert card info
    useEffect(()=>{
        const abortHandler = new AbortController();
        if (user._id) {
            setConvertCardErrLoad(pre=>{
                return {...pre,isLoading:true,msg:""}
            });
            fetch(`/api/v1/convert_card/${user._id}`)
            .then(res=>res.json())
            .then(resData =>{
                if (resData?.data?._id) {
                    setConvertCard(resData.data)
                }else{
                    // error
                    setConvertCardErrLoad(pre=>{
                        return {...pre,msg:resData.message??"Error occured in sesrver to find status"}
                    });
                }
            })
            .catch(err =>{
                console.log(err);
                setConvertCardErrLoad(pre=>{
                    return {...pre,msg:resData.message??"Error occured to fetch card status"}
                });
            })
            .finally(()=>{
                setConvertCardErrLoad(pre=>{
                    return {...pre,isLoading:false}
                });
            })
        }

        return () => abortHandler.abort()
    },[user._id])

    if (isUserLoading) {
        return <p>Loading..............</p>
    }
    return (
        <MainLayout>
            <PrivateComponent>
                {!convertCardErrLoad.isLoading ? <ConvertCard convertCard={convertCard} user={user}></ConvertCard> : <p>Loading.....</p>}
                
            </PrivateComponent>
        </MainLayout>
    );
};

export default DashboardHome;

/*
    1. account status: available char limit, req limit
    2. total convert file, size
*/