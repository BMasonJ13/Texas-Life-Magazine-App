
import React from 'react';


//Components
import ArticleCard from '../components/article-card/ArticleCard';
import ActionCard from '../components/action-card/ActionCard';
import Ad from '../components/ad/Ad'
import PodcastCard from '../components/podcast-card/PodcastCard';
import PublicationCard from '../components/publication-card/PublicationCard';

//Subcomponents
import {Header} from '../components/sub/text/Text'

import styles from './Home.module.css'


const Home = () =>
{
    return(
        <>
            <section className={styles.homeSection}>
                <Header color="white" textStyle={styles.header}>Latest Articles</Header>
                <div className={styles.container}>
                    <ArticleCard
                    image="https://picsum.photos/1028"
                    title="Test Card"
                    description="This is a black test card!"
                    cardStyle={styles.card}
                    color="black"
                    />
                    <ArticleCard
                    image="https://picsum.photos/1028"
                    title="Test Card"
                    description="This is a white test card!"
                    cardStyle={styles.card}
                    />
                </div>
                <div className={styles.adContainer}>
                    <Ad image="https://picsum.photos/512"/>
                    <Ad image="https://picsum.photos/512"/>
                </div>
                <div className={styles.adContainer}>
                    <Ad image="https://picsum.photos/512" />
                    <Ad image="https://picsum.photos/512" />
                </div>
                <div className={styles.container}>
                    <ArticleCard
                    image="https://picsum.photos/1028"
                    title="Test Card"
                    description="This is a black test card!"
                    cardStyle={styles.card}
                    color="black"
                    />
                    <ArticleCard
                    image="https://picsum.photos/1028"
                    title="Test Card"
                    description="This is a white test card!"
                    cardStyle={styles.card}
                    />
                </div>
                <div className={styles.adContainer}>
                    <Ad image="https://picsum.photos/512" />
                    <Ad image="https://picsum.photos/512" />
                </div>
                <div className={styles.adContainer}>
                    <Ad image="https://picsum.photos/512" />
                    <Ad image="https://picsum.photos/512" />
                </div>
            </section>
            <section className={styles.homeSection}>
                <div className={styles.container}>
                <ActionCard 
                title="Want your business on our website?"
                description="Get your advertisment on our website today."
                actionText="Become a Sponsor"
                cardStyle={styles.card}
                path="/"
                />
                </div>
                <div className={styles.adContainer}>
                    <Ad image="https://picsum.photos/512" />
                    <Ad image="https://picsum.photos/512" />
                </div>
                <div className={styles.adContainer}>
                    <Ad image="https://picsum.photos/512" />
                    <Ad image="https://picsum.photos/512" />
                </div>
            </section>
            <section className={styles.homeSection}>
                <div className={styles.container}>
                    <Header color="white" textStyle={styles.headerWithSpace}>Recent Podcasts</Header>
                    <PodcastCard 
                    title="Ep. 22 | The Legendary Coyote Store"
                    description="Join us as we discuss The Legenedary Coyote Store in Gail, Texas."
                    cardStyle={styles.card}
                    />
                    <PodcastCard
                        title="Ep. 22 | The Legendary Coyote Store"
                        description="Join us as we discuss The Legenedary Coyote Store in Gail, Texas."
                        color="black"
                        cardStyle={styles.card}
                    />
                    <PodcastCard
                        title="Ep. 22 | The Legendary Coyote Store"
                        description="Join us as we discuss The Legenedary Coyote Store in Gail, Texas."
                        cardStyle={styles.card}
                    />
                </div>
                <div className={styles.adContainer}>
                    <Ad image="https://picsum.photos/512" />
                    <Ad image="https://picsum.photos/512" />
                </div>
                <div className={styles.adContainer}>
                    <Ad image="https://picsum.photos/512" />
                    <Ad image="https://picsum.photos/512" />
                </div>
            </section>
            <section className={styles.homeSection}>
                <div className={styles.container}>
                    <ActionCard
                        title="Do you like Texas History?"
                        description="View our articles on historic locations in Texas."
                        actionText="View Historic Articles"
                        cardStyle={styles.card}
                        path="/"
                        color="black"
                    />
                </div>
                <div className={styles.adContainer}>
                    <Ad image="https://picsum.photos/512" />
                    <Ad image="https://picsum.photos/512" />
                </div>
                <div className={styles.adContainer}>
                    <Ad image="https://picsum.photos/512" />
                    <Ad image="https://picsum.photos/512" />
                </div>
            </section>
            <section className={styles.homeSection}>
                <div className={styles.container}>
                    <PublicationCard 
                        image="https://picsum.photos/159/206"
                        title="Decemeber-January 2021"
                        description="This magazine features Jody Nix and the Texas Cowboys."
                        path="/"
                        color="black"
                        cardStyle={styles.card}
                    />
                    <PublicationCard
                        image="https://picsum.photos/159/206"
                        title="Decemeber-January 2021"
                        description="This magazine features Jody Nix and the Texas Cowboys."
                        path="/"
                        cardStyle={styles.card}
                    />
                    <PublicationCard
                        image="https://picsum.photos/159/206"
                        title="Decemeber-January 2021"
                        description="This magazine features Jody Nix and the Texas Cowboys."
                        path="/"
                        color="black"
                        cardStyle={styles.card}
                    />
                    <PublicationCard
                        image="https://picsum.photos/159/206"
                        title="Decemeber-January 2021"
                        description="This magazine features Jody Nix and the Texas Cowboys."
                        path="/"
                        cardStyle={styles.card}
                    />
                </div>
                <div className={styles.adContainer}>
                    <Ad image="https://picsum.photos/512" />
                    <Ad image="https://picsum.photos/512" />
                </div>
                <div className={styles.adContainer}>
                    <Ad image="https://picsum.photos/512" />
                    <Ad image="https://picsum.photos/512" />
                </div>
            </section>
        </>   
    )
}

export default Home