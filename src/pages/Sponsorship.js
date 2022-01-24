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
                <Subtitle textStyle={styles.header}>Standard Adverstisment</Subtitle>
                <Paragraph textStyle={styles.para}>Have an ad for your business on a page of your choice.</Paragraph>
                <a className={styles.button} href="https://buy.stripe.com/14k3fseB94K3eiIdQQ">Get Standard Ad</a>
            </Card>
            <Card color="black" cardStyle={styles.planContainer}>
                <Subtitle color="black" textStyle={styles.header}>Delux Advertisment</Subtitle>
                <Paragraph color="black" textStyle={styles.para}>Have an ad for your business on the top of a page of your choice.</Paragraph>
                <a className={styles.blackButton} href="https://buy.stripe.com/14k3fseB94K3eiIdQQ">Get Delux Ad</a>
            </Card>
            </div>
            <Card color="black" cardStyle={styles.plantContainer}>
                <Subtitle color="black" textStyle={styles.header}>Cancel Advertisment</Subtitle>
                <Paragraph color="black" textStyle={styles.para}>To cancel your adverstisment subsription please send an email to TexasLifeMag11@gmail.com</Paragraph>
            </Card>
        </div>
    )
}

export default Sponsorship