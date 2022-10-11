import Head from 'next/head';
import mainLtST from "./MainLayout.module.css" 

import React, { useEffect } from 'react';
import HeadCustom from './HeadCustom';
import NavCommon from './NavCommon';


const MainLayout = ({metaInfo,children}) => {
    useEffect(()=>{
        const classSetterFn = (e) =>{
            const navElement = document.querySelector('.navScrollTracker');
            navElement.classList.add(mainLtST.navScrollStyle);
            if(window.pageYOffset>0){
                console.log(navElement);
                navElement.classList.add(mainLtST.navScrollStyle); 
            }else{
                navElement.classList.remove(mainLtST.navScrollStyle);
            }
        }
        window.addEventListener('scroll',classSetterFn);
        return () => window.removeEventListener("scroll", classSetterFn);
    },[])
/*
    // make navbar shadow on scroll
    useEffect(()=>{
        const classSetter = (e) =>{
            
        }
        window.addEventListener('scroll',(e)=>{
            const navElement = document.querySelector('.navScrollTracker');
            navElement.classList.add(mainLtST.navScrollStyle);
            if(window.pageYOffset>0){
                console.log(navElement);
                navElement.classList.add(mainLtST.navScrollStyle); 
            }else{
                navElement.classList.remove(mainLtST.navScrollStyle);
            }
          });
    },[])
    */
    return (
        <div className={`color-primary-dark ${mainLtST.main_Layout_container}`}>
            <HeadCustom metaInfo={metaInfo}></HeadCustom>
            <header>
                <NavCommon></NavCommon>
            </header>
            <div className={`${mainLtST.main_Layout_wrapper}`}>
                <main>
                    {children}
                </main>

                <footer>
                    <p className='m-0 p-5 text-center'>Copyright © 2020 All Rights Reserved</p>
                </footer>
            </div>
        </div>
    );
};

export default MainLayout;