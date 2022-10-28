import React from 'react';
import loaderRotateBallST from "./loaderRotateBall.module.css";

const LoaderRotateBall = () => {
    return (
        <div style={{minWidth:"80px"}}>
            <span className={loaderRotateBallST.loader}></span>
        </div>
    );
};

export default LoaderRotateBall;