import React from 'react';
import MainLayout from '../client_side/components/common/MainLayout';
import PackageCards from '../client_side/components/packages/packageCard';
import { getPackages } from '../client_side/utils/fetchUtils/packageUtils';

const pricingPage_MetaInfo = {
    title: "Dashboard/SpeakUp-AI",
    description: "Convert your text to audio file using SpeakUp-AI",
}

const Pricing = ({packages=[]}) => {
    // console.log(packages);
    return (
        <MainLayout metaInfo={pricingPage_MetaInfo}>
                <h1>Priceing</h1>
            <section>
                <PackageCards packages={packages}></PackageCards>
            </section>
            
        </MainLayout>
    );
};

export default Pricing;

export const getStaticProps = async() =>{
    // get dynamic data from server here
    const {packages,package_error} = await getPackages(`?sort=${"-character_limit"}&fields=${"-updatedAt"}`);
    console.log(packages);
    if (packages) {
        return {
            props:{
                packages
            },
            notFound: false,
            revalidate: 10  // sec
        }
        
    }else{
        return{
            props:{
                packages: []
            }
        }
    }
}