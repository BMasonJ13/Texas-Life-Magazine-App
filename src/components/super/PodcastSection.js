import React from 'react';

//Components
import PodcastCard from '../podcast-card/PodcastCard'
import Ad from '../ad/Ad'

//CSS Modules
import styles from './PodcastSection.module.css'

const PodcastSection = () =>
{

    return(
        <section className={styles.homeSection}>
            <div className={styles.container}>
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

export default PodcastSection