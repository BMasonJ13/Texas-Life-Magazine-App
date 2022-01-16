import React from 'react';
import { Link } from 'react-router-dom'

import styles from './Button.module.css'

const currentStyle = (color) => {
    if (color === "pink")
        return styles.black
    else if (color === "blue")
        return styles.white
    else if (color === "black")
        return styles.white
    else
        return styles.black
}



const Button = ({ buttonStyle, color, path, children, externalLink}) =>
{

    const ButtonType = () => {
        if (externalLink)
            return <a className={styles.button + " " + currentStyle(color) + " " + buttonStyle} href={path} target="_blank" rel="noopener noreferrer"> {children}</a>
        else
            return <Link className={styles.button + " " + currentStyle(color) + " " + buttonStyle} to={path}>{children}</Link>
    }

    return ButtonType() 
}

export default Button