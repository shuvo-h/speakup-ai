import React, { useEffect, useState } from 'react';
import packageST from "../../../styles/package.module.css";
import PackageSingleCard from "./PackageSingleCard";

export const pkgDuration = {
    month: "monthly",
    year:"yearly"
}



const PackageCards = ({packages,user}) => {
    const [packagesSt,setPackagesSt] = useState([]);
    const [pkgBtnlight,setPkgBtnlight] = useState(pkgDuration.month);

    useEffect(()=>{
        if (pkgBtnlight === pkgDuration.year) {
            const calculatedResult = calculatePkgDiscunt(packages?.slice(0,4),"discount_yearly");
            setPackagesSt(calculatedResult)
        }else{
            const calculatedResult = calculatePkgDiscunt(packages?.slice(0,4),"discount_monthly")
            setPackagesSt(calculatedResult)
        }
    },[pkgBtnlight,packages])
    
    const calculatePkgDiscunt =(packages=[],circleTime='') => packages.map(pkg =>{
        // change original price based of month and year
        if (circleTime === 'discount_yearly') {
            pkg.price_original = parseFloat(pkg.price) * 12;
        }else{
            pkg.price_original = parseFloat(pkg.price);
        }
        
        const totalDiscount = parseFloat(pkg[circleTime]) + parseFloat(pkg.discount_special);
        const price_with_discount = parseFloat(pkg.price_original) - (parseFloat(pkg.price_original)*(totalDiscount/100))
        return {...pkg,price_with_discount,discountCal:circleTime};
    })

    return (
        <div>
            <div className={`text-center color-primary-light`}>
                <div>
                    <h2 className={`f-12 m-0 p-3 color-primary-light`}>Plans & Pricing</h2>
                    <p className={`m-5 `}>Choose the plan that suits you.</p>
                </div>
                <div>
                    <div className={`m-auto ${packageST.package_duration_btn_wrapper}`}>
                        <button className={`m-0 f-5 ${pkgBtnlight ===pkgDuration.month?packageST.active_pkg_btn:""}`} onClick={()=>setPkgBtnlight(pkgDuration.month)}>Monthly</button>
                        <button className={`m-0 f-5 ${pkgBtnlight ===pkgDuration.year? packageST.active_pkg_btn:""}`} onClick={()=>setPkgBtnlight(pkgDuration.year)}>Yearly</button>
                    </div>
                    
                </div>
            </div>
            <div className={`${packageST.packages}`}>
                {
                    packagesSt.map((packageEl,pkgIdx) => <PackageSingleCard pkgBtnlight={pkgBtnlight} pkgIdx={pkgIdx} packageEl={packageEl} user={user} key={packageEl._id}></PackageSingleCard>)
                }
            </div>
            
        </div>
    );
};

export default PackageCards;