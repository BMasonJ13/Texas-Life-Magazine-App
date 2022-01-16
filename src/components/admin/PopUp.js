import React from 'react'

//Subcomponents
import Card from '../sub/card/Card'
import { Subtitle } from '../sub/text/Text'
import Icon from '../sub/icon/Icon'
import * as Icons from '@fortawesome/free-solid-svg-icons'

//CSS Module
import styles from './PopUp.module.css'

const PopUp = ({loading}) => 
{

    return(
        <div className={`${styles.background}${loading ? " " + styles.show : ""}`}>
            <div className={styles.innerContainer}>
                <Card color="white" cardStyle={styles.card}>
                    <div className={styles.cardInnerContainer}>
                        <Icon icon={Icons.faSpinner} iconStyle={styles.loader}></Icon>
                        <Subtitle textStyle={styles.button}>Uploading Data</Subtitle>
                    </div>
                </Card>
            </div>
        </div>
    )

}

export default PopUp