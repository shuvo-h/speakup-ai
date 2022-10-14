import React from 'react';
import MainLayout from '../../client_side/components/common/MainLayout';
import PrivateComponent from '../../client_side/components/ProtectedComponents/PrivateComponent';

const Purchases = () => {
    return (
        <MainLayout>
            <PrivateComponent>
                <h2>Show all the purchase slips here</h2>
            </PrivateComponent>
        </MainLayout>
    );
};

export default Purchases;