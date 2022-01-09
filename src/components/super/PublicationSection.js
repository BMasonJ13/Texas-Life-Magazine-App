import React from 'react';

//Components
import PublicationCard from '../publication-card/PublicationCard'
import Ad from '../ad/Ad'
//CSS Modules
import styles from './PublicationSection.module.css'

const PublicationSection = () => 
{
    return(
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
            </div>
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
    )
}

export default PublicationSection