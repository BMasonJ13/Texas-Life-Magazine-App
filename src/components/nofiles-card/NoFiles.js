
import React from 'react'

import Card from '../sub/card/Card'
import Icon from '../sub/icon/Icon'
import * as Icons from '@fortawesome/free-solid-svg-icons'
import {Subtitle, Paragraph} from '../sub/text/Text'

import styles from './NoFiles.module.css'

const NoFiles = () => {

    return(
        <Card cardStyle={styles.card} color="black">
            <Subtitle textStyle={styles.header}>Whoops!</Subtitle>
            <Icon iconStyle={styles.icon} icon={Icons.faServer}></Icon>
            <Paragraph textStyle={styles.para}>We couldn't find any data or it doesn't exist!</Paragraph>
        </Card>
    )

}

export default NoFiles;