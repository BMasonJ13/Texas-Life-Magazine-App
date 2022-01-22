import React from 'react'

import Card from '../../components/sub/card/Card'
import * as Icons from '@fortawesome/free-solid-svg-icons'
import Icon from '../../components/sub/icon/Icon'
import {Subtitle} from '../../components/sub/text/Text'

import styles from './AddElementCard.module.css'

const AddElementCard = ({action, type, cardStyle, handleClick}) => 
{
    return(
        <Card color="white" cardStyle={styles.card + " " + cardStyle} onClick={handleClick}>
            <div className={styles.innerContainer}>
                <Icon iconStyle={styles.icon} icon={Icons.faPlus} />
                <Subtitle textStyle={styles.title} >{action}</Subtitle>
            </div>
        </Card>
    )

}

export default AddElementCard;