
import React from 'react'

import styles from './Ad.module.css'

const Ad = ({image, path, long}) =>
{
    return(
        <div className={long ? styles.long : styles.square}>
            <a href={path} target="_blank" rel="noopener noreferrer">
                <img className={long ? styles.longImage : styles.squareImage} src={image} alt=""/>
            </a>
        </div>
    )
}

export default Ad