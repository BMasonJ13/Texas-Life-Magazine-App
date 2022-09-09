import React from 'react';

//Components

//Subcomponents
import {Subtitle, Paragraph} from '../components/sub/text/Text'
import Card  from '../components/sub/card/Card'

//CSS Modules
import styles from './Sponsorship.module.css'

const Sponsorship = ({isAdmin}) => {
    return (
        <div>
        <div className={styles.container}>
            <Card cardStyle={styles.planContainer}>
                <Subtitle textStyle={styles.header}>Contact us to become a sponsor today</Subtitle>
                <Paragraph textStyle={styles.para}>Creed Cahill, Editor</Paragraph>
                <a className={styles.button} href="mailto:TexasLifeMag11@gmail.com">TexasLifeMag11@gmail.com</a>
            </Card>
            </div>
        </div>
    )
}

export default Sponsorship