import React from 'react'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import * as Icons from '@fortawesome/free-solid-svg-icons'

//CSS Modules
import styles from './PodcastCard.module.css'
import cardStyles from '../../shared-styles/CardStyles.module.css'
import textStyles from '../../shared-styles/TextStyles.module.css'

const PodcastCard = ({title, description, black, cardStyle}) =>
{

    return(
        <div className={(black ? cardStyles.blackCard : cardStyles.whiteCard) + " " + styles.card + " " + cardStyle}>
            <div className={styles.innerContainer}>
                <FontAwesomeIcon className={black ? styles.whiteIcon : styles.blackIcon} icon={Icons.faPlay}/>
                <h2 className={(black ? textStyles.whiteSubtitle : textStyles.blackSubtitle) + " " + styles.title}>{title}</h2>
                <h3 className={(black ? textStyles.whiteParagraph : textStyles.blackParagraph) + " " + styles.description}>{description}</h3>
                <h2 className={(black ? textStyles.whiteSubtitle : textStyles.blackSubtitle) + " " + styles.time}>32:15</h2>
            </div>
        </div>
    )

}

export default PodcastCard