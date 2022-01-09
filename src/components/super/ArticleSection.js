import React from 'react';

//Components
import ArticleCard from '../article-card/ArticleCard'
import Ad from '../ad/Ad'

//CSS Modules
import styles from './ArticleSection.module.css'

const ArticleSection = () => 
{

    return(

        <section className={styles.homeSection}>
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
            <div className={styles.adInner} id={styles.one}>
                <Ad image="https://picsum.photos/512" />
                <Ad image="https://picsum.photos/512" />
            </div>
            <div className={styles.adInner} id={styles.two}>
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
        </section>

    )

}

export default ArticleSection