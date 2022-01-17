import React from 'react';

//Components
import PodcastCard from '../podcast-card/PodcastCard'
import Ad from '../ad/Ad'

//CSS Modules
import styles from './PodcastSection.module.css'

const PodcastSection = ({isAdmin, podOne, podTwo, podThree, adOne, adTwo, adThree, adFour, adLocation}) =>
{

    return(
        <section className={styles.homeSection}>
            <div className={styles.container}>
                { podOne &&  <PodcastCard
                    isAdmin={isAdmin}
                    id={podOne.id}
                    mp3URL={podOne.mp3URL}
                    title={podOne.title}
                    description={podOne.description}
                    color={podOne.color}
                    time={podOne.time}
                    cardStyle={styles.card}
                /> } 
                { podTwo && <PodcastCard
                    isAdmin={isAdmin}
                    id={podTwo.id}
                    mp3URL={podTwo.mp3URL}
                    title={podTwo.title}
                    description={podTwo.description}
                    color={podTwo.color}
                    time={podTwo.time}
                    cardStyle={styles.card}
                /> }
               {podThree && <PodcastCard
                    isAdmin={isAdmin}
                    id={podThree.id}
                    mp3URL={podThree.mp3URL}
                    title={podThree.title}
                    description={podThree.description}
                    color={podThree.color}
                    time={podThree.time}
                    cardStyle={styles.card}
                /> }
            </div>
            <div className={styles.adInner} id={styles.one}>
                {adOne && <Ad isAdmin={isAdmin} id={adOne.id} image={adOne.imageURL} path={adOne.websiteURL} adLocation={adLocation} />}
                {adTwo && <Ad isAdmin={isAdmin} id={adTwo.id} image={adTwo.imageURL} path={adTwo.websiteURL} adLocation={adLocation} />}
            </div>
            <div className={styles.adInner}>
                {adThree && <Ad isAdmin={isAdmin} id={adThree.id} image={adThree.imageURL} path={adThree.websiteURL} adLocation={adLocation} />}
                {adFour && <Ad isAdmin={isAdmin} id={adFour.id} image={adFour.imageURL} path={adFour.websiteURL} adLocation={adLocation} />}
            </div>
        </section>
    )

}

export default PodcastSection