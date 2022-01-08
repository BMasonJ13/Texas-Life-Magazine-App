import React from 'react';

//Subcomponents
import Card from '../sub/card/Card';
import { Subtitle, Paragraph } from '../sub/text/Text'
import Button from '../sub/button/Button';

//CSS Modules
import styles from './PublicationCard.module.css'

const PublicationCard = ({image, title, description, path, color, cardStyle}) =>
{

    return(
        <Card color={color} cardStyle={styles.card + " " + cardStyle}>
            <div className={styles.innerContainer}>
                <img className={styles.image} src={image} alt=""/>
                <Subtitle color={color} textStyle={styles.title}>{title}</Subtitle>
                <Paragraph color={color} textStyle={styles.description}>{description}</Paragraph>
                <Button path={path} color={color} buttonStyle={styles.action}>View Magazine</Button>
            </div>
        </Card>
    )

}

export default PublicationCard