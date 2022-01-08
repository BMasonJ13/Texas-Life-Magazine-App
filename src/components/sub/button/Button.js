import React from 'react';
import { Link } from 'react-router-dom'

import styles from './Button.module.css'

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

const Button = ({buttonStyle, color, path, children}) =>
{
    return <Link className={styles.button + " " + currentStyle(color) + " " + buttonStyle} to={path}>{children}</Link>
}

export default Button