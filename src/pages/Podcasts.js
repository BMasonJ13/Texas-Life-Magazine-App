import React, { useEffect, useState } from 'react';

//Firebase
import {getCards, getAds, sortByDate} from './admin/utils/SectionDataUtil'

//Supercomponents
import PodcastSection from '../components/super/PodcastSection';

//Components
import AddContentCard from '../components/admin/AddContentCard'
import NoFiles from '../components/nofiles-card/NoFiles'

//CSS Modules
import styles from './Podcast.module.css'

const Podcasts = ({isAdmin}) => {

    const [data, setData] = useState(null);
    const [sponsorData, setSponsorData] = useState(null);

    const getData = async () => {
        setData(await getCards("Podcasts"))
        setSponsorData(await getAds("sponsor-podcasts"))
    }

    useEffect(() => {
        getData();
    }, [])

    const prepareData = () => {

        if (!data || !sponsorData)
            return null;

        let sectionAmount = Math.ceil(data.size / 4);
        const sections = [];
        const pubDocs = [];
        const sponsorDocs = [];

        if (sectionAmount === 0)
            return <NoFiles />

        for (let i = 0; i < data.size; i++) {
            pubDocs[i] = data.docs[i].data();
        }

        for (let i = 0; i < sponsorData.size; i++) {
            sponsorDocs[i] = sponsorData.docs[i].data();
        }

        pubDocs.sort(sortByDate);
        sponsorDocs.sort(sortByDate).reverse();

        for (let i = 0; i < sectionAmount; i++) {
            const docs = [];
            const sponDocs = [];
            for (let j = 0; j < 3; j++) {
                if ((i * 3) + j > pubDocs.size)
                    docs[j] = null;
                else
                    docs[j] = pubDocs[(i * 3) + j];
                if ((i * 3) + j > sponsorDocs.size)
                    sponDocs[j] = null;
                else
                    sponDocs[j] = sponsorDocs[(i * 3) + j];
            }
            sections[i] = <PodcastSection
                isAdmin={isAdmin}
                key={i + " key"}
                podOne={docs[0]}
                podTwo={docs[1]}
                podThree={docs[2]}
                adOne={sponDocs[0]}
                adTwo={sponDocs[1]}
                adThree={sponDocs[2]}
                adFour={sponDocs[3]}
                adLocation="podcasts"
            />
        }

        return sections;
    }

    return (
        <>
            { isAdmin && <AddContentCard cardStyle={styles.adminCard} path="/AddPodcast" action="Add Podcast"/> }
            { isAdmin && <AddContentCard cardStyle={styles.adminCard} path="/AddSponsor/:Podcasts" action="Add Sponsor" /> } 
            { isAdmin && <AddContentCard cardStyle={styles.adminCard} path="/AddLongSponsor/:Podcasts" action="Add Long Sponsor" />}
            { prepareData()}
        </>
    )
}

export default Podcasts