import React from 'react';
import simpleLoaderST from './simpleLoader.module.css';

const SimpleLoader = ({width="250px",height="50px"}) => {
    return (
        <div style={{width,height}}>
            <span className={simpleLoaderST.loader}></span>
        </div>
    );
};

export default SimpleLoader;