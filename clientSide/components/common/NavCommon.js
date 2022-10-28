import React from 'react';
import NavLink from 'next/link';
import mainLtST from "./MainLayout.module.css" 
import { useRouter } from 'next/router';
import useAuthFromCookie from '../../hooks/useAuthFromCookie';

const mainNavItems = [
    {name:"Home",path:"/"},
    {name:"Dashboard",path:"/dashboard"},
    {name:"Pricing",path:"/pricing"},
]


const NavCommon = () => {
    const router = useRouter();
    const {user,isUserLoading,removeCookie} = useAuthFromCookie();

    return (
        <nav className={`d-flex justifyBetween navScrollTracker ${mainLtST.layout_nav}`}>
            <div>
                <h1 className='m-0'>SpeakUP-AI</h1>
            </div>
            <div>
                {
                    mainNavItems.map(nav => <NavLink href={nav.path} key={nav.name} passHref={true}>
                        <a className={router.route === nav.path? `${mainLtST.layout_nav_link} ${mainLtST.active_link}`:mainLtST.layout_nav_link}>{nav.name}</a>
                    </NavLink>)
                }
                {
                    !isUserLoading && user?.token 
                    ?   
                            <a style={{cursor: "pointer"}} className={mainLtST.layout_nav_link} onClick={removeCookie}>Logout</a>
                        
                    :   <NavLink href={"login"} passHref={true}>
                        <a className={router.route ==="login"? `${mainLtST.layout_nav_link} ${mainLtST.active_link}`:mainLtST.layout_nav_link}>Login</a>
                    </NavLink>
                }
            </div>
        </nav>
    );
};

export default NavCommon;