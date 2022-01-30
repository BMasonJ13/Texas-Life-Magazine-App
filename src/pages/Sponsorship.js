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
                <Subtitle color="black" textStyle={styles.header}>Title Advertisment</Subtitle>
                <Paragraph color="black" textStyle={styles.para}>Have an ad for your business on the top of a page of your choice.</Paragraph>
                <a className={styles.blackButton} href="https://buy.stripe.com/3cs9DQ0Kj7Wfb6waEF">Get Title Ad</a>
            </Card>
            </div>
        </div>
    )
}

export default Sponsorship