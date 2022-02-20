import React, { useState, useEffect } from 'react';

//Firestore
import { getCards, getAds, sortByDate } from './admin/utils/SectionDataUtil'

//Supercomponents
import ArticleSection from '../components/super/ArticleSection'

//Components
import AddContentCard from '../components/admin/AddContentCard';
import NoFiles from '../components/nofiles-card/NoFiles'

//CSS Modules
import styles from './SomervelleCounty.module.css'

const SomervelleCounty = ({isAdmin}) => {

    const [data, setData] = useState(null);
    const [sponsorData, setSponsorData] = useState(null);
    const [bannerData, setBannerData] = useState(null);

    const getData = async () => {
        setData(await getCards("Articles-somervellcounty"))
        setSponsorData(await getAds("sponsor-somervellcounty"))
        setBannerData(await getAds("sponsor-long-somervellecounty"))
    }

    useEffect(() => {
        getData();
    }, [])

    const prepareData = () => {

        if (!data || !sponsorData || !bannerData)
            return null;

        let sectionAmount = Math.ceil(data.size / 4);
        const sections = [];
        const pubDocs = [];
        const sponsorDocs = [];
        const bannerDocs = [];

        if (sectionAmount === 0)
            return <NoFiles />

        for (let i = 0; i < data.size; i++) {
            pubDocs[i] = data.docs[i].data();
        }

        for (let i = 0; i < sponsorData.size; i++) {
            sponsorDocs[i] = sponsorData.docs[i].data();
        }

        for (let i = 0; i < bannerData.size; i++) {
            bannerDocs[i] = bannerData.docs[i].data();
        }


        pubDocs.sort(sortByDate);
        sponsorDocs.sort(sortByDate).reverse();

        for (let i = 0; i < sectionAmount; i++) {
            const docs = [];
            const sponDocs = [];
            for (let j = 0; j < 4; j++) {
                if ((i * 4) + j > pubDocs.size)
                    docs[j] = null;
                else
                    docs[j] = pubDocs[(i * 4) + j];
                if ((i * 4) + j > sponsorDocs.size)
                    sponDocs[j] = null;
                else
                    sponDocs[j] = sponsorDocs[(i * 4) + j];
            }

            const bannerAd = i > bannerDocs.size ? null : bannerDocs[i];


            sections[i] = <ArticleSection
                isAdmin={isAdmin}
                type={"somervellcounty"}
                key={i + " key"}
                art1={docs[0]}
                art2={docs[1]}
                art3={docs[2]}
                art4={docs[3]}
                bannerAd={bannerAd}
                top={i === 0}
                ad1={sponDocs[0]}
                ad2={sponDocs[1]}
                ad3={sponDocs[2]}
                ad4={sponDocs[3]}
                adLocation="somervellcounty"
            />
        }

        return sections;
    }

    return (
        <>
           {isAdmin && <AddContentCard cardStyle={styles.card} action="Add Article" path="/AddArticle/:SomervellCounty"/> }
           {isAdmin && <AddContentCard cardStyle={styles.card} path="/AddSponsor/:SomervellCounty" action="Add Sponsor" />} 
           {isAdmin && <AddContentCard cardStyle={styles.card} path="/AddLongSponsor/:SomervellCounty" action="Add Long Sponsor" />}
           {prepareData()}
        </>
    )
}

export default SomervelleCounty