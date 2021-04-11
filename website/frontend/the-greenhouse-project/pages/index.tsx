import Head from 'next/head'
import styles from '../styles/Home.module.css'
import PictureDisplay from '../components/PictureDisplay'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>The Greenhouse Project</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PictureDisplay></PictureDisplay>

    </div>
  )
}
