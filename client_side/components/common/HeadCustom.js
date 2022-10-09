import Head from 'next/head';
import React from 'react';

const headMetaInfo = {
    title: "SpeakUp-AI",
    description: "Convert your text to audio file using SpeakUp-AI",
    favicon: "favicon.ico",
}

const HeadCustom = ({metaInfo={title:"",description:"",favicon: "favicon.ico"}}) => {
    return (
        <Head>
            <title>{metaInfo.title?? headMetaInfo.title}</title>
            <meta name="description" content={metaInfo.description?? headMetaInfo.description} />
            <link rel="icon" href={metaInfo.favicon?? headMetaInfo.favicon} />
        </Head>
    );
};

export default HeadCustom;