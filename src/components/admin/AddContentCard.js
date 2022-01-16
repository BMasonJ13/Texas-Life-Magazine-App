import React from 'react';

//Subcomponents
import {Link} from 'react-router-dom'
import Card from '../sub/card/Card';
import {Subtitle} from '../sub/text/Text'
import Icon from '../sub/icon/Icon'
import * as Icons from '@fortawesome/free-solid-svg-icons'

//CSS Module
import styles from './AddContentCard.module.css'

const AddContentCard = ({cardStyle, path, action}) => 
{
    return(
        <Link to={path} className={styles.link}>
            <Card color="white" cardStyle={styles.card + " " + cardStyle}>
                <div className={styles.innerContainer}>
                    <Icon iconStyle={styles.icon} icon={Icons.faPlus}/>
                    <Subtitle textStyle={styles.title} >{action}</Subtitle>
                </div>
            </Card>
        </Link>
    )
}

export default AddContentCard