import React from 'react';
import HeadCustom from './HeadCustom';

const DashboardLayout = ({metaInfo={},children}) => {
    
    return (
        <div>
            <HeadCustom metaInfo={metaInfo}></HeadCustom>
            <header className={`text-center`}>
                <h1>Dashboard Header</h1>
            </header>

            <div>
                {children}
            </div>

            <footer className={`text-center`}>
                <h1>Dashboard Footer</h1>
            </footer>
        </div>
    );
};

export default DashboardLayout;