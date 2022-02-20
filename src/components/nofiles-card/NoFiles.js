
import React from 'react'

import Card from '../sub/card/Card'
import Icon from '../sub/icon/Icon'
import * as Icons from '@fortawesome/free-solid-svg-icons'
import {Subtitle, Paragraph} from '../sub/text/Text'

import styles from './NoFiles.module.css'

const NoFiles = () => {

    return(
        <Card cardStyle={styles.card} color="black">
            <Subtitle textStyle={styles.header}>Coming Soon!</Subtitle>
            <Icon iconStyle={styles.icon} icon={Icons.faClock}></Icon>
            <Paragraph textStyle={styles.para}>&copy; Texas Life Magazine 2022</Paragraph>
        </Card>
    )

}

export default NoFiles;