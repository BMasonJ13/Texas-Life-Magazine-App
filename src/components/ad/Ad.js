
import React from 'react'

//Subcomponents
import { Link } from 'react-router-dom'
import Icon from '../sub/icon/Icon'
import * as Icons from '@fortawesome/free-solid-svg-icons'

//CSS Modules
import styles from './Ad.module.css'

const Ad = ({isAdmin, id, image, path, long, adStyle}) =>
{

    const getData = () =>
    {
        if(isAdmin && image === null)
        {
            return(
            <div className={styles.blankAdmin + " " + (long ? styles.longImage : styles.squareImage)}>

            </div>
            )
        } else if (isAdmin && image)
        {
            return(
                <div className={styles.blankAdmin + " " + (long ? styles.longImage : styles.squareImage)}>
                    <img className={long ? styles.longImage : styles.squareImage} src={image} alt="" />
                    <div className={styles.adminContainer}>
                        <Link className={styles.adminEdit} to={`/EditSponsor/:${id}`}><Icon iconStyle={styles.icon} icon={Icons.faPencilAlt} /></Link>
                        <Link className={styles.adminDelete} to={`/DeleteSponsor/:${id}`}><Icon iconStyle={styles.timesIcon} icon={Icons.faTrash} /></Link>
                    </div>
                </div>
            )
        } else
        {
            return(
                <div className={(long ? styles.long : styles.square) + " " + adStyle}>
                    <a href={path} target="_blank" rel="noopener noreferrer">
                        <img className={long ? styles.longImage : styles.squareImage} src={image} alt="" />
                    </a>
                </div>
            )
        }
    }

    return(
        <>
            {getData()}
        </>
    )
}

export default Ad