import React from 'react';
import loaderWeatherST from './loaderWeather.module.css';

const LoaderWeather = () => {
    return (
        <div>
            <span className={loaderWeatherST.loader}></span>
        </div>
    );
};

export default LoaderWeather;