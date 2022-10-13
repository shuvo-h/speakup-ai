import React from 'react';
import stripeST from "./stripe.module.css";

const StripePayBTNLoader = () => {
    return (
        <div className={stripeST.lds_ellipsis}><div></div><div></div><div></div><div></div></div>
    );
};

export default StripePayBTNLoader;