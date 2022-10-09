import Head from 'next/head'
import Image from 'next/image'
import MainLayout from '../client_side/components/common/MainLayout'
import styles from '../styles/Home.module.css'

const homePage_meta = {
  title: "SpeakUp-AI",
  description: "Convert your text to audio file using SpeakUp-AI writing home page",

}

export default function Home() {

  return (
    <div className={styles.container}>
      <MainLayout metaInfo={homePage_meta}>
        <section>Min child sections</section>
      </MainLayout>
    </div>
  )
}
