
import React from 'react';

//Supercomponents
import ArticleSection from '../components/super/ArticleSection'
import PublicationSection from '../components/super/PublicationSection'
import PodcastSection from '../components/super/PodcastSection'

//Components
import ActionCard from '../components/action-card/ActionCard';
import Ad from '../components/ad/Ad'

//Subcomponents
import {Header} from '../components/sub/text/Text'

import styles from './Home.module.css'


const Home = () =>
{
    return(
        <>
            <Header color="white" textStyle={styles.header}>Latest Articles</Header>
            <ArticleSection />
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
           <PodcastSection />
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