import Head from 'next/head'
import Image from 'next/image'
import MainLayout from '../client_side/components/common/MainLayout'
import FreeConverter from '../client_side/components/home/FreeConverter'
import ProcessSteps from '../client_side/components/home/ProcessSteps'
import SupportedLanguages, { HintsToSignUp, HireAPro, ShortSiteAd } from '../client_side/components/home/SupportedLanguages'
import homeST from '../styles/Home.module.css'

const homePage_meta = {
  title: "SpeakUp-AI",
  description: "Convert your text to audio file using SpeakUp-AI writing home page",

}

export default function Home() {

  return (
      <MainLayout metaInfo={homePage_meta} mainLayoutClassName={homeST.homeContainer}>
        <section className={`${homeST.bannerContainer}`}>
          <div className={`${homeST.bannerText}`}>
            <h1 className='m-2'>SpeakUp-AI: Convert Text to Speech</h1>
            <h1 className='m-2'>Download Audio from Text</h1>
            <p>Convert text to speech free online and download it as Mp3 in natural voices.</p>
          </div>
          <div>{/* empty div to make css grid */}</div>
          <FreeConverter></FreeConverter>
        </section>
        <section>
          <ProcessSteps></ProcessSteps>
        </section>
        <section>
          <ShortSiteAd></ShortSiteAd>
        </section>
        <section>
          <SupportedLanguages></SupportedLanguages>
        </section>
        <section>
          <HintsToSignUp></HintsToSignUp>
        </section>
        <section>
          <HireAPro></HireAPro>
        </section>
      </MainLayout>
  )
}
