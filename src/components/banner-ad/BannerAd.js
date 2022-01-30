
import React, { useState, useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import Ad from '../ad/Ad.js'

import { getAds } from '../../pages/admin/utils/SectionDataUtil'

import styles from './BannerAd.module.css'

import TLMBanner from '../../res/TLMBanner.jpg'

const BannerAd = ({isAdmin}) =>
{

    const [path, setPath] = useState("home")
    const {type} = useParams();
    const [sponsorData, setSponsorData] = useState(null);
    const location = useLocation();

    const getData = async () => {
        if(path.includes("view"))
            setSponsorData((await getAds(`sponsor-long-${path.substring(path.indexOf("/") + 1).substring(0, path.substring(path.indexOf("/") + 1).indexOf("/"))}`)).docs)
        else
            setSponsorData((await getAds(`sponsor-long-${path}`)).docs)
        console.log(path.substring(path.indexOf("/") + 1).substring(0, path.substring(path.indexOf("/") + 1).indexOf("/")))
    }

    useEffect(() => {
        setPath(location.pathname.substring(1).toLowerCase());

        if(path === "")
            setPath("home")
        getData();

        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [setPath, location, path]);

    const prepareData = () => {

        if(!sponsorData)
            return

        const topAd = sponsorData[0] ? sponsorData[0].data() : null;
        const bottomAd = sponsorData[1] ? sponsorData[1].data() : null;

        return ( 
            <div className={styles.ad}>
                {topAd && <Ad long 
                isAdmin={isAdmin}
                image={topAd.imageURL} 
                adStyle={styles.longAd} 
                id={topAd.id}
                path={topAd.websiteURL} 
                adLocation={`${path}`}
                /> }
                <img
                    className={styles.bannerImage}
                    src={TLMBanner}
                    alt="Texas Life Magazine Banner"
                />
                {bottomAd && <Ad long 
                isAdmin={isAdmin}
                image={bottomAd.imageURL} 
                adStyle={styles.longAd} 
                id={bottomAd.id}
                path={bottomAd.websiteURL}
                adLocation={`${path}`}
                /> }
            </div>
        )
    }

    return (
        <>
            {prepareData()}
        </>
    )

}

export default BannerAd