import React from 'react';

import styles from './Text.module.css'

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

export const Header = ({color, textStyle, children}) => {
    return <h1 className={currentStyle(color) + " " + styles.header + " " + textStyle}>{children}</h1>
}

export const Subtitle = ({ color, textStyle, children }) => {
    return <h1 className={currentStyle(color) + " " + styles.subtitle + " " + textStyle}>{children}</h1>
}

export const Paragraph = ({ color, textStyle, children }) => {
    return <h1 className={currentStyle(color) + " " + styles.paragraph + " " + textStyle}>{children}</h1>
}