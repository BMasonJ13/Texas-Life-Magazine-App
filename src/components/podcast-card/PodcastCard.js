import React from 'react'

//Subcomponents
import Card from '../sub/card/Card';
import Icon from '../sub/icon/Icon'
import { Subtitle, Paragraph } from '../sub/text/Text'
import * as Icons from '@fortawesome/free-solid-svg-icons'

//CSS Modules
import styles from './PodcastCard.module.css'

const PodcastCard = ({title, description, color, cardStyle}) =>
{

    return(
        <Card color={color} cardStyle={styles.card + " " + cardStyle}>
            <div className={styles.innerContainer}>
                <Icon color={color} icon={Icons.faPlay}/>
                <Subtitle color={color} textStyle={styles.title}>{title}</Subtitle>
                <Paragraph color={color} textStyle={styles.description}>{description}</Paragraph>
                <Subtitle color={color}  textStyle={styles.time}>32:15</Subtitle>
            </div>
        </Card>
    )

}

export default PodcastCard