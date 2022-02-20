
import React from 'react'

import styles from './BannerAd.module.css'

import TLMBanner from '../../res/TLMBanner.jpg'

const BannerAd = ({isAdmin}) =>
{

    return (
        <div className={styles.ad}>
            <img
                className={styles.bannerImage}
                src={TLMBanner}
                alt="Texas Life Magazine Banner"
            />
        </div>
    )

}

export default BannerAd