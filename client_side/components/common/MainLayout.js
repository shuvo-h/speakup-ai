import Head from 'next/head';
import React from 'react';
import HeadCustom from './HeadCustom';

const MainLayout = ({metaInfo,children}) => {
    return (
        <div style={{backgroundImage: 'linear-gradient(to right, #0f0c29, #302b63, #24243e)'}}>
            <HeadCustom metaInfo={metaInfo}></HeadCustom>

            <header>
                header paret  navigation NAV in main layout
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