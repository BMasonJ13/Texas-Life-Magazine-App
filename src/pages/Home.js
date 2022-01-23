
import React, { useState, useEffect } from 'react';

//Firestore
import { getAds, sortByDate } from './admin/utils/SectionDataUtil'
import { getRecentDocs } from '../utils/Database'

//Supercomponents
import ArticleSection from '../components/super/ArticleSection'
import PublicationSection from '../components/super/PublicationSection'
import PodcastSection from '../components/super/PodcastSection'

//Components
import AddContentCard from '../components/admin/AddContentCard'
import ActionCard from '../components/action-card/ActionCard';
import Ad from '../components/ad/Ad'

//Subcomponents
import {Header} from '../components/sub/text/Text'

import styles from './Home.module.css'


const Home = ({isAdmin}) =>
{

    const [musicData, setMusicData] = useState(null);
    const [tastesData, setTastesData] = useState(null);
    const [backTheBlueData, setBackTheBlueData] = useState(null);
    const [somervelleCountyData, setSomervelleCountyData] = useState(null)
    const [publicationData, setPublicationData] = useState(null);
    const [podcastData, setPodcastData] = useState(null)

    const [sponsorData, setSponsorData] = useState([]);

    const getData = async () => {

        setSponsorData((await getAds("sponsor-home")).docs)
        setPublicationData(await getRecentDocs("Publications"), 1)

        sponsorData.sort(sortByDate).reverse()

        setMusicData(await getRecentDocs("Articles-music", 1))
        setTastesData(await getRecentDocs("Articles-tastes", 1))
        setBackTheBlueData(await getRecentDocs("Articles-backtheblue", 1))
        setSomervelleCountyData(await getRecentDocs("Articles-somervellecounty", 1))

        
        setPodcastData(await getRecentDocs("Podcasts"), 3)

        

    }

    useEffect(() => {
        getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const prepareArticles = () => {

        const elements = [];

        //I'm an idiot but I'm not changing it lol
        if(musicData)
            elements.push(musicData[0].data())
        else
            elements.push(null);
        
        if(tastesData)
            elements.push(tastesData[0].data())
        else
            elements.push(null);
        
        if(backTheBlueData)
            elements.push(backTheBlueData[0].data())
        else
            elements.push(null)
        if(somervelleCountyData)
            elements.push(somervelleCountyData[0].data())
        else
            elements.push(null)


        return(
            <>
                <Header color="white" textStyle={styles.header}>Latest Articles</Header>
                <ArticleSection
                    isAdmin={isAdmin}
                    type="home"
                    art1={elements[0]}
                    art2={elements[1]}
                    art3={elements[2]}
                    art4={elements[3]}
                    ad1={sponsorData[4] ? sponsorData[4].data() : null}
                    ad2={sponsorData[5] ? sponsorData[5].data() : null}
                    ad3={sponsorData[6] ? sponsorData[6].data() : null}
                    ad4={sponsorData[7] ? sponsorData[7].data() : null}
                    adLocation="home"
                />
            </>
        )
        
    }

    const preparePublication = () => {

        if(!publicationData)
            return

        const element = publicationData[0] ? publicationData[0].data() : null;
        
        return(
            <>
                
                <Header color="white" textStyle={styles.header}>Latest Publication</Header>
                <PublicationSection
                    isAdmin={isAdmin}
                    pubOne={element}
                    adOne={sponsorData[0] ? sponsorData[0].data() : null}
                    adTwo={sponsorData[1] ? sponsorData[1].data() : null}
                    adThree={sponsorData[2] ? sponsorData[2].data() : null}
                    adFour={sponsorData[3] ? sponsorData[3].data() : null}
                    adLocation="home"
                />
            </>
        )

    }

    const preparePodcasts = () => {
        if(!podcastData)
            return <></>

        const element = podcastData[0] ? podcastData[0].data() : null;
        const element2 = podcastData[1] ? podcastData[0].data() : null;
        const element3 = podcastData[2] ? podcastData[0].data() : null;

        return(
            <PodcastSection
                podOne={element}
                podTwo={element2}
                podThree={element3}
                adOne={sponsorData[8] ? sponsorData[8].data() : null}
                adTwo={sponsorData[9] ? sponsorData[9].data() : null}
                adThree={sponsorData[10] ? sponsorData[10].data() : null}
                adFour={sponsorData[11] ? sponsorData[11].data() : null}
                adLocation="home"
            />
        )

    }

    return(
        <>
            {isAdmin && <AddContentCard cardStyle={styles.card} path="/AddSponsor/:Home" action="Add Sponsor" />}
            
            {preparePublication()}
            
            {prepareArticles()}
            <section className={styles.homeSection}>
                <div className={styles.container}>
                <ActionCard 
                title="Want your business on our website?"
                description="Get your advertisment on our website today."
                actionText="Become a Sponsor"
                cardStyle={styles.card}
                path="/Sponsors"
                />
                </div>
                <div className={styles.adInner} id={styles.one}>
                    <Ad image="https://picsum.photos/512" />
                    <Ad image="https://picsum.photos/512" />
                </div>
                <div className={styles.adInner} >
                    <Ad image="https://picsum.photos/512" />
                    <Ad image="https://picsum.photos/512" />
                </div>
            </section>
            <Header color="white" textStyle={styles.header + " " + styles.headerWithSpace}>Recent Podcasts</Header>
            {preparePodcasts()}
            <section className={styles.homeSection}>
                <div className={styles.container}>
                    <ActionCard
                        title="Do you like Texas History?"
                        description="View our articles on historic locations in Texas."
                        actionText="View Historic Articles"
                        cardStyle={styles.card}
                        path="/Historic"
                        color="black"
                    />
                </div>
                    <div className={styles.adInner} id={styles.one}>
                        <Ad image="https://picsum.photos/512" />
                        <Ad image="https://picsum.photos/512" />
                    </div>
                    <div className={styles.adInner}>
                        <Ad image="https://picsum.photos/512" />
                        <Ad image="https://picsum.photos/512" />
                </div>
            </section>
            <PublicationSection />
        </>   
    )
}

export default Home