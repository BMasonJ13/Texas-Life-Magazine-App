
import React from 'react'
import Ad from '../ad/Ad.js'

import styles from './BannerAd.module.css'

import TLMBanner from '../../res/TLMBanner.jpg'

const BannerAd = ({topAd, bottomAd}) =>
{

    return(
        <div className={styles.ad}>
            <Ad long image={topAd}/>
            <img 
            className={styles.bannerImage}
            src={TLMBanner} 
            alt="Texas Life Magazine Banner"
            />
            <Ad long image={bottomAd}/>
        </div>
    )
}

export default BannerAd