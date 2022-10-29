import React from 'react';
import loaderAlteratST from "./loaderAlterate.module.css";

const LoaderAlterat = () => {
    return (
        <span className={loaderAlteratST.loader}></span>
    );
};

export default LoaderAlterat;