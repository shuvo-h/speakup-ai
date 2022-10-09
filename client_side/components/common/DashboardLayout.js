import React from 'react';
import HeadCustom from './HeadCustom';

const DashboardLayout = ({metaInfo,children}) => {
    return (
        <div>
            <HeadCustom metaInfo={metaInfo}></HeadCustom>
            <header className={`text-center`}>
                <h1>Dashboard Header</h1>
            </header>

            <main>
                {children}
            </main>

            <footer className={`text-center`}>
                <h1>Dashboard Footer</h1>
            </footer>
        </div>
    );
};

export default DashboardLayout;