
import React from 'react';
import ArticleCard from '../components/article-card/ArticleCard';
import Ad from '../components/ad/Ad'

import textStyles from '../shared-styles/TextStyles.module.css'
import styles from './Home.module.css'
import ActionCard from '../components/action-card/ActionCard';
import PodcastCard from '../components/podcast-card/PodcastCard';

const Home = () =>
{
    return(
        <>
            <section className={styles.homeSection}>
                <h1 className={textStyles.blackHeader + " " + styles.header}>Latest Articles</h1>
                <div className={styles.container}>
                    <ArticleCard
                    image="https://picsum.photos/1028"
                    title="Test Card"
                    description="This is a black test card!"
                    cardStyle={styles.card}
                    black
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
                    black
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
                    <h1 className={textStyles.blackHeader + " " + styles.headerWithSpace}>Recent Podcasts</h1>
                    <PodcastCard 
                    title="Ep. 22 | The Legendary Coyote Store"
                    description="Join us as we discuss The Legenedary Coyote Store in Gail, Texas."
                    cardStyle={styles.card}
                    />
                    <PodcastCard
                        title="Ep. 22 | The Legendary Coyote Store"
                        description="Join us as we discuss The Legenedary Coyote Store in Gail, Texas."
                        black
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
                        black
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
                    
                </div>
            </section>
        </>   
    )
}

export default Home