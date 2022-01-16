import React from 'react';

//Components
import PublicationCard from '../publication-card/PublicationCard'
import Ad from '../ad/Ad'
//CSS Modules
import styles from './PublicationSection.module.css'

const PublicationSection = ({isAdmin, pubOne, pubTwo, pubThree, pubFour}) => 
{
    return(
        <section className={styles.homeSection}>
            <div className={styles.container}>
                {pubOne && <PublicationCard
                    id={pubOne.id}
                    isAdmin={isAdmin}
                    image={pubOne.imageURL}
                    title={pubOne.title}
                    description={pubOne.description}
                    path={pubOne.pdfURL}
                    color={pubOne.color}
                    cardStyle={styles.card}
                /> }
               {pubTwo && <PublicationCard
                    id={pubTwo.id}
                    isAdmin={isAdmin}
                    image={pubTwo.imageURL}
                    title={pubTwo.title}
                    description={pubTwo.description}
                    path={pubTwo.pdfURL}
                    color={pubTwo.color}
                    cardStyle={styles.card}
                /> }
            </div>
            <div className={styles.container}>
              {pubThree &&  <PublicationCard
                    id={pubThree.id}
                    isAdmin={isAdmin}
                    image={pubThree.imageURL}
                    title={pubThree.title}
                    description={pubThree.description}
                    path={pubThree.pdfURL}
                    color={pubThree.color}
                    cardStyle={styles.card}
                /> }
               {pubFour && <PublicationCard
                    id={pubFour.id}
                    isAdmin={isAdmin}
                    image={pubFour.imageURL}
                    title={pubFour.title}
                    description={pubFour.description}
                    path={pubFour.pdfURL}
                    color={pubFour.color}
                    cardStyle={styles.card}
                /> }
            </div>
            <div className={styles.adInner} id={styles.one}>
                <Ad isAdmin={isAdmin} image="https://picsum.photos/512" />
                <Ad isAdmin={isAdmin} image="https://picsum.photos/512" />
            </div>
            <div className={styles.adInner}>
                <Ad isAdmin={isAdmin} image="https://picsum.photos/512" />
                <Ad isAdmin={isAdmin} image="https://picsum.photos/512" />
            </div>
        </section>
    )
}

export default PublicationSection