
import React from 'react'

//Subcomponents
import { Link } from 'react-router-dom'
import Icon from '../sub/icon/Icon'
import * as Icons from '@fortawesome/free-solid-svg-icons'

//CSS Modules
import styles from './Ad.module.css'

const Ad = ({isAdmin, id, image, path, long, adStyle, adLocation}) =>
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
                <div className={styles.blankAdmin + " " + (long ? styles.long : styles.squareImage) + " " + adStyle}>
                    <img className={long ? styles.longImage : styles.squareImage} src={image} alt="" />
                    <div className={styles.adminContainer}>
                        {!long && <Link className={styles.adminEdit} to={`/Edit${long ? "Long" : ""}Sponsor/:${adLocation}/:${id}`}><Icon iconStyle={styles.icon} icon={Icons.faPencilAlt} /></Link> }
                        <Link className={styles.adminDelete} to={`/Delete${long ? "Long" : ""}Sponsor/:${adLocation}/:${id}`}><Icon iconStyle={styles.timesIcon} icon={Icons.faTrash} /></Link>
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