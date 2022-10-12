import React from 'react';
import MainLayout from '../client_side/components/common/MainLayout';
import FrequentlyAskedQ from '../client_side/components/packages/FrequentlyAskedQ';
import PackageCards from '../client_side/components/packages/packageCards';
import useAuthFromCookie from '../client_side/hooks/useAuthFromCookie';
import { getPackages } from '../client_side/utils/fetchUtils/packageUtils';

const pricingPage_MetaInfo = {
    title: "pricing",
    description: "Convert your text to audio file using SpeakUp-AI",
}

const Pricing = ({packages=[]}) => {
    const {user} = useAuthFromCookie();
    // console.log(packages);
    return (
        <MainLayout metaInfo={pricingPage_MetaInfo}>
            <section>
                <PackageCards packages={packages} user={user}></PackageCards>
            </section>
            <section>
                <FrequentlyAskedQ></FrequentlyAskedQ>
            </section>
        </MainLayout>
    );
};

export default Pricing;

export const getStaticProps = async() =>{
    // get dynamic data from server here
    const {packages,package_error} = await getPackages(`?status=active&sort=${"-character_limit"}&fields=${"-updatedAt"}`);
    console.log(packages);
    if (packages) {
        return {
            props:{
                packages
            },
            // notFound: true,
            // revalidate: 10  // sec
        }
        
    }else{
        return{
            props:{
                packages: []
            }
        }
    }
}