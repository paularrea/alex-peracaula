import React, { lazy, useState, Suspense } from "react"
import { Link } from "gatsby"
import styles from "../styles/videos.module.scss"
import YouTube from 'react-youtube';
import Loader from "react-loader-spinner"
const Layout = lazy(() => import("../components/Layout/layout"))
const SEO = lazy(() => import("../components/seo"))

const videosUrls = [
  'https://youtu.be/w0NcyiahpzI',
  'https://youtu.be/5DCk1i15s8Y',
  'https://youtu.be/5sGKQnpZLFg',
  'https://youtu.be/AV5m2W9MH_w',
  'https://youtu.be/8nyVAJhPAEs',
  'https://youtu.be/5sMrU6zA2kE',
  'https://youtu.be/-1hhBmlEDSE',
  'https://youtu.be/g1olyrnNuF8',
]

const videosIds = [
  '5DCk1i15s8Y',
  'g1olyrnNuF8',
  '5sGKQnpZLFg',
  'w0NcyiahpzI',
  'AV5m2W9MH_w',
  '8nyVAJhPAEs',
  '5sMrU6zA2kE',
  '-1hhBmlEDSE',
]

const Videos = (props) => {
  const [videoLoaded, setVideoLoaded] = useState(false)
  const optsDesktop = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  const optsMobile = {
    height: '183',
    width: '300',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Layout page={'videos'}>
        <SEO title="Videos" lang="es" description="Videos parodia de El Ultimo Superviviente, Alex Peracaula"/>
        <h1>Vídeos parodia</h1>
        <div className={`${styles.loader_container} ${videoLoaded ? styles.hide : ''}`}>
          <Loader
            type="Puff"
            color="black"
            height={100}
            width={100}
            timeout={3000} //3 secs
            className={videoLoaded ? styles.hide : ''}
          />
        </div>
        {videosIds.map(id => (
          <>
            <YouTube videoId={id} opts={optsDesktop} className={styles.desktop} onReady={() => setVideoLoaded(true)}/>
            <YouTube videoId={id} opts={optsMobile} className={styles.mobile} onReady={() => setVideoLoaded(true)}/>
          </>
        ))}
        <Link to="/">- Volver al inicio -</Link>
      </Layout>
    </Suspense>
)}

export default Videos
