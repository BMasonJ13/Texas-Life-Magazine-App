import React from 'react';
import {Link} from 'react-router-dom'

import styles from './ActionCard.module.css'
import textStyles from '../../shared-styles/TextStyles.module.css'
import buttonStyles from '../../shared-styles/ButtonStyles.module.css'

const ActionCard = ({title, description, actionText, path, cardStyle, black}) =>
{
    return(
        <div className={(black ? styles.blackCard : styles.whiteCard) + " " + styles.card + " " + cardStyle}>
            <div className={styles.innerContainer}>
                <h1 className={(black ? textStyles.whiteHeader : textStyles.blackHeader) + " " + styles.title}>{title}</h1>
                <h3 className={(black ? textStyles.whiteSubtitle : textStyles.blackSubtitle) + " " + styles.subtitle}>{description}</h3>
                <Link className={(black ? buttonStyles.whiteButton : buttonStyles.blackButton) + " " + styles.action} to={path}>{actionText}</Link>
            </div>
        </div>
    )
}

export default ActionCard