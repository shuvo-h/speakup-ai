import Head from 'next/head';
import NavLink from 'next/link';
import mainLtST from "./MainLayout.module.css" 

import React, { useEffect } from 'react';
import HeadCustom from './HeadCustom';
import NavCommon from './NavCommon';


const MainLayout = ({metaInfo,mainLayoutClassName="",children}) => {
    useEffect(()=>{
        const classSetterFn = (e) =>{
            const navElement = document.querySelector('.navScrollTracker');
            if (navElement) {
                navElement.classList.add(mainLtST.navScrollStyle);
                if(window.pageYOffset>0){
                    navElement.classList.add(mainLtST.navScrollStyle); 
                }else{
                    navElement.classList.remove(mainLtST.navScrollStyle);
                }
            }
        }
        window.addEventListener('scroll',classSetterFn);
        return () => window.removeEventListener("scroll", classSetterFn);
    },[])

    
    return (
        <div className={`color-primary-dark ${mainLtST.main_Layout_container}`}>
            <HeadCustom metaInfo={metaInfo}></HeadCustom>
            <header>
                <NavCommon></NavCommon>
            </header>
            <div className={`${mainLtST.main_Layout_wrapper} ${mainLayoutClassName}`}>
                <main className={`${mainLtST.main_Layout_body_middle}`}>
                    {children}
                </main>

                <footer className={`${mainLtST.footerContainer}`}>
                    <h1>SpeakUp-AI</h1>
                    <p className='m-0 p-5 text-center'>Copyright &copy; {new Date().getFullYear()} SpeakUP-AI Reserved</p>
                    <div>
                        <NavLink href={""}><a>Privacy</a></NavLink>
                        <NavLink href={"/terms&condition"}><a>Terms & condition</a></NavLink>
                        <NavLink href={""}><a>Contact</a></NavLink>
                    </div>
                </footer>

            </div>
        </div>
    );
};

export default MainLayout;