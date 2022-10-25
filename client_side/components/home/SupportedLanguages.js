import Image from 'next/image';
import React from 'react';
import { gttActiveLanguages } from '../../../server_side/utils/activeLanguageGttUnOfficial';
import homeST from "../../../styles/Home.module.css";

const SupportedLanguages = () => {
    return (
        <div className={homeST.langContainer}>
            <div className={homeST.langWrapper}>
                <h1 className={homeST.subTitle}>Supported voice languages:</h1>
                <div className={homeST.langCards}>
                    {
                        gttActiveLanguages.map(language => <div key={language.code}><button className={`m-3 text-center ${homeST.langCard}`} >{language.lang}</button></div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default SupportedLanguages;


// Text to Speech voices in 20 languages
// SpealUp-AI offers a selection of voices across 20 languages. Most languages have voices available for testing quality in the free plan. Some languages also support multiple accents like English, Spanish and Portuguese.


import addImg from "../../assets/backgrounds/sort-site-add.png"
export const ShortSiteAd = () =>{
    return (
        <div className={homeST.sortSiteAdd}>
            <div className={homeST.sortSiteAddMedia}></div>
            <div>
                <h1>Text to Speech voices in {gttActiveLanguages.length} languages</h1>
                <p>SpealUp-AI offers a selection of voices across 20 languages. Most languages have voices available for testing quality in the free plan. Some languages also support multiple accents like English, Spanish and Portuguese.</p>
            </div>
        </div>
    )
}

import NavLink from "next/link";
export const HintsToSignUp = () =>{

    return (
        <div className={`${homeST.hintsSignnUp}`}>
            <div>
                <h1>Try our fully featured text to speech platform today</h1>
            </div>
            <div>
                <NavLink href={"/pricing"} passHref={true}><a>View Pricing</a></NavLink>
            </div>
        </div>
    )
}

import shuvoImg from "../../assets/backgrounds/shuvo-haldar.png";
import { EmailIcon, FBicon, LinkedINIcon, TwitterIcon, YoutubeIcon } from '../../utils/Icons/social_contact_icons';
const proProfiles = [
    {
        img: shuvoImg,
        name:"Shuvo Haldar",
        email:"shuvoh38@gmail.com",
        position:"Web Developer",
        description:"A full stack web developer working to build user friendly dynamic and scaleable web sites over one year.",
        socials:[
            { icon: <FBicon width={30} height={30} />, url:""},
            { icon: <TwitterIcon width={30} height={30} />, url:""},
            { icon: <LinkedINIcon width={30} height={30} />, url:""},
            { icon: <YoutubeIcon width={30} height={30} />, url:""},
        ]
    },
]

export const HireAPro = () =>{

    return (
        <div className={`${homeST.hireProContainer}`}>
            <div className={`${homeST.hireProWrapper}`}>
                <div>
                    <h1>Hire A Pro</h1>
                    <p>Need help creating your own AI tools?</p>
                    <p>Talk to our Pro developers and analysts and get a quote for your own tools.</p>
                </div>
                <div className={`${homeST.profiles}`}>
                    {
                        proProfiles.map(profile => <div className={`${homeST.profile}`} key={profile.email}>
                            <Image src={profile.img} width={100} height={100} alt={profile.name}></Image>
                            <h2>{profile.name}</h2>
                            <p className={`${homeST.profilePosition}`}>{profile.position}</p>
                            <p>{profile.description}</p>
                            <div><button className='d-flex justifyCenter alignCenter'><EmailIcon width={20} /> {profile.email}</button></div>
                            <div className={`d-flex justifyCenter ${homeST.profileIcons}`}>
                                {
                                    profile.socials.map(social => <NavLink href={social.url} key={social.url}><a>{social.icon}</a></NavLink>)
                                }
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    )
}


