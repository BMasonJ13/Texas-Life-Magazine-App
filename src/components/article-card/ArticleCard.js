import React from 'react';

import { Link } from 'react-router-dom'

import textStyles from '../../shared-styles/TextStyles.module.css'
import buttonStyles from '../../shared-styles/ButtonStyles.module.css'
import styles from './ArticleCard.module.css'

const ArticleCard = ({image, title, description, black, cardStyle}) =>
{

    return(
        <div className={(black ? styles.blackCard : styles.whiteCard) + " " + styles.card + " " + cardStyle}>
            <div className={styles.innerContainer}>
                <img className={styles.image} src={image} alt=""/>
                <h2 className={(!black ? textStyles.blackSubtitle : textStyles.whiteSubtitle) + " " + styles.title}>{title}</h2>
                <h3 className={(!black ? textStyles.blackParagraph : textStyles.whiteParagraph)  + " " + styles.description}>{description}</h3>
                <Link className={(!black ? buttonStyles.blackButton : buttonStyles.whiteButton) + " " + styles.action}to="/Home">View Article</Link>
            </div>
        </div>
    )

}

export default ArticleCard