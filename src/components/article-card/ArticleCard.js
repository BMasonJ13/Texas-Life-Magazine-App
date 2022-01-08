import React from 'react';

//Subcomponents
import Card from '../sub/card/Card';
import {Subtitle, Paragraph} from '../sub/text/Text'
import Button from '../sub/button/Button'

//CSS Modules
import styles from './ArticleCard.module.css'

const ArticleCard = ({image, title, description, color, cardStyle}) =>
{

    return(
        <Card color={color} cardStyle={cardStyle}>
            <div className={styles.innerContainer}>
                <img className={styles.image} src={image} alt=""/>
                <Subtitle color={color} textStyle={styles.title}>{title}</Subtitle>
                <Paragraph color={color} textStyle={styles.description}>{description}</Paragraph>
                <Button color={color} buttonStyle={styles.action} path="/Home">View Article</Button>
            </div>
        </Card>
    )

}

export default ArticleCard