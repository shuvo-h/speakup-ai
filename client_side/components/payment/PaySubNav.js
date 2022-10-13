import React from 'react';
import NavLink from "next/link";
import payST from "../../../styles/Payment.module.css";

const PaySubNav = ({paymentPageStepShow}) => {
    return (
        <nav className={`capitalize ${payST.sub_pay_nav}`}> 
            {
                paymentPageStepShow.map(step => <div className={`${payST.sub_pay_nav_item}  ${step.diable ? payST.sub_pay_nav_item_disable:""}`} key={step.name}>
                    {step.diable ? <a>{step.name}</a> : <NavLink  href={step.pathname} ><a>{step.name}</a></NavLink>}
                    <a>{step.icon}</a>
                </div>)
            }
        </nav>
    );
};

export default PaySubNav;