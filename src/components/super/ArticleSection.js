import React from 'react';

//Components
import ArticleCard from '../article-card/ArticleCard'
import Ad from '../ad/Ad'

//CSS Modules
import styles from './ArticleSection.module.css'

const ArticleSection = ({isAdmin, type, t1, t2, t3, t4, art1, art2, art3, art4, ad1, ad2, ad3, ad4, adLocation}) => 
{

    return(

        <section className={styles.homeSection}>
            <div className={styles.container}>
                {art1 && <ArticleCard
                    id={art1.id}
                    type={type ? type : t1}
                    isAdmin={isAdmin}
                    image={art1.coverURL}
                    title={art1.title}
                    description={art1.description}
                    cardStyle={styles.card}
                    color={art1.color}
                /> }
               {art2 && <ArticleCard
                    id={art2.id}
                    type={type ? type : t2}
                    isAdmin={isAdmin}
                    image={art2.coverURL}
                    title={art2.title}
                    description={art2.description}
                    cardStyle={styles.card}
                    color={art2.color}
                />}
            </div>
            <div className={styles.adInner} id={styles.one}>
                {ad1 && <Ad isAdmin={isAdmin} id={ad1.id} image={ad1.imageURL} path={ad1.websiteURL} adLocation={adLocation} />}
                {ad2 && <Ad isAdmin={isAdmin} id={ad2.id} image={ad2.imageURL} path={ad2.websiteURL} adLocation={adLocation} />}
            </div>
            <div className={styles.adInner} id={styles.two}>
                {ad3 && <Ad isAdmin={isAdmin} id={ad3.id} image={ad3.imageURL} path={ad3.websiteURL} adLocation={adLocation} />}
                {ad4 && <Ad isAdmin={isAdmin} id={ad4.id} image={ad4.imageURL} path={ad4.websiteURL} adLocation={adLocation} />}
            </div>
            <div className={styles.container}>
                {art3 && <ArticleCard
                    id={art3.id}
                    type={type ? type : t3}
                    isAdmin={isAdmin}
                    image={art3.coverURL}
                    title={art3.title}
                    description={art3.description}
                    cardStyle={styles.card}
                    color={art3.color}
                /> }
                {art4 && <ArticleCard
                    id={art4.id}
                    type={type ? type : t4}
                    isAdmin={isAdmin}
                    image={art4.coverURL}
                    title={art4.title}
                    description={art4.description}
                    cardStyle={styles.card}
                    color={art4.color}
                /> }
            </div>
        </section>

    )

}

export default ArticleSection