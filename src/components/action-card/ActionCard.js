import React from 'react';

//Subcomponents
import Card from '../sub/card/Card'
import {Header, Subtitle} from '../sub/text/Text'
import Button from '../sub/button/Button'

//CSS Modules
import styles from './ActionCard.module.css'

const ActionCard = ({title, description, actionText, path, cardStyle, color}) =>
{
    return(
        <Card color={color} cardStyle={styles.card + " " + cardStyle}>
            <div className={styles.innerContainer}>
                <Header color={color} textStyle={styles.title}>{title}</Header>
                <Subtitle color={color} textStyle={styles.subtitle}>{description}</Subtitle>
                <Button color={color} buttonStyle={styles.action} path={path}>{actionText}</Button>
            </div>
        </Card>
    )
}

export default ActionCard