import React, {useState} from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import styles from "../styles/index.module.scss"
import ReactPlayer from "react-player"
import Loader from "react-loader-spinner"
import ImageGallery from 'react-image-gallery'

const IndexPage = () => {
  const [videoLoaded, setVideoLoaded] = useState(false)
  const imagesUrls = [
    { original: 'https://i.ibb.co/JyCmTjp/alex-book-1-min.jpg' },
    { original: 'https://i.ibb.co/wYVgQ8T/rsz-og-image.jpg' },
    { original: 'https://i.ibb.co/SdtQ9cv/alex-book-2.jpg' },
    { original: 'https://i.ibb.co/fxcLzcB/IMG-5029-min.jpg'},
    { original: 'https://i.ibb.co/KD37x8x/IMG-5067.jpg'},
    { original: 'https://i.ibb.co/DtZZjgb/IMG-5030-min.jpg'},
    { original: 'https://i.ibb.co/SNkT8cT/IMG-2861-min.jpg'},
    { original: 'https://i.ibb.co/WvR1M0B/IMG-2889-min.png'},
  ]
  
  return (
  <Layout slide={true} lan={'ca'} >
    <SEO title="Home" lang="ca" description="Pàgina web de l'Alex Peracaula, actor"/>
    <h1 className={styles.smaller_h1}>Videobook</h1>
    <div className={`${styles.loader_container} ${videoLoaded ? styles.hide: ''}`}>
      <Loader
          type="Puff"
          color="black"
          height={100}
          width={100}
          timeout={3000} //3 secs
          className={videoLoaded ? styles.hide : ''}
        />
    </div>
    <div className={ `${styles.video_container} ${videoLoaded ? styles.change : ''}`}>
      <ReactPlayer
        url="https://vimeo.com/408550057"
        vimeoConfig={{ iframeParams: { fullscreen: 0 } }}
        onReady={() => setVideoLoaded(true)}
        className={styles.video_player}
      />
    </div>
    <div className={styles.gallery}>
      <Link to="/ca/galeria"><h2>Galeria</h2></Link>
      <Link to="/ca/galeria"><p>(Veure més)</p></Link>
      <div className={styles.container_slider}>
        <ImageGallery items={imagesUrls} showThumbnails={false} showFullscreenButton={false} showPlayButton={false} autoPlay={false} slideInterval={3500} showNav={true}/>
      </div>
    </div>
  </Layout>
)}

export default IndexPage
