import React from 'react';
import NavLink from 'next/link';
import mainLtST from "./MainLayout.module.css" 
import { useRouter } from 'next/router';

const mainNavItems = [
    {name:"Home",path:"/"},
    {name:"Dashboard",path:"/dashboard"},
    {name:"Pricing",path:"/pricing"},
]


const NavCommon = () => {
    const router = useRouter()
    console.log(router.route);
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
            </div>
        </nav>
    );
};

export default NavCommon;