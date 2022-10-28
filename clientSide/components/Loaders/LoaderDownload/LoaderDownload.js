import React from 'react';
import loaderDownloadST from './loaderDownload.module.css';

const LoaderDownload = () => {
    return (
        <div>
            <span className={loaderDownloadST.loader}></span>
        </div>
    );
};

export default LoaderDownload;