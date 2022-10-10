import Head from 'next/head';
import NavLink from 'next/link';
import React from 'react';
import HeadCustom from './HeadCustom';

const mainNavItems = [
    {name:"Home",path:"/"},
    {name:"Dashboard",path:"/dashboard"},
    {name:"Pricing",path:"/pricing"},
]

const MainLayout = ({metaInfo,children}) => {
    return (
        <div style={{backgroundImage: 'linear-gradient(to right, #0f0c29, #302b63, #24243e)'}} className={`color-primary-dark`}>
            <HeadCustom metaInfo={metaInfo}></HeadCustom>

            <header>
                <nav>
                    {
                        mainNavItems.map(nav => <NavLink href={nav.path} key={nav.name}><a>{nav.name}</a></NavLink>)
                    }
                </nav>
            </header>

            <main>
                {children}
            </main>

            <footer>
                Footer part FOOTER main layout
            </footer>
        </div>
    );
};

export default MainLayout;