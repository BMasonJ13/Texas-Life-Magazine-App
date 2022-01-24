import React from 'react';

//Subcomponents
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//CSS Modules
import styles from './Icon.module.css'

const currentStyle = (color) => {
    if (color === "pink")
        return styles.white
    else if (color === "blue")
        return styles.white
    else if (color === "black")
        return styles.white
    else
        return styles.black
}

const Icon = ({icon, color, iconStyle, onClick}) =>
{

    return <FontAwesomeIcon onClick={onClick} className={currentStyle(color) + " " + iconStyle} icon={icon} />

}

export default Icon