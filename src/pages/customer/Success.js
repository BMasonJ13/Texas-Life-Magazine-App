import React from 'react'

//Subcomponents
import { Header, Subtitle, Paragraph } from '../../components/sub/text/Text'

//Components

//CSS Modules
import styles from './Success.module.css'

const Success = ({long}) => {

    return (
        <div className={styles.container}>
            <Header textStyle={styles.text}>Thank you for your purchase.</Header>
            <Subtitle textStyle={styles.text}>One last step!</Subtitle>
            <Paragraph textStyle={styles.text}>Email TexasLifeMag11@gmail.com a picture, what page you want your advertisement on, and the link to your website or facebook page.</Paragraph>
            <Paragraph textStyle={styles.text}>Please allow 24-48 hours for validation.</Paragraph>
            {!long && <Paragraph textStyle={styles.text}>For best results Image dimesions should be 512 pixels by 512 pixels.</Paragraph>}
            {long && <Paragraph textStyle={styles.text}>For best results Image dimesions should be 850 pixels by 50 pixels.</Paragraph>}
        </div>
    )
}

export default Success;