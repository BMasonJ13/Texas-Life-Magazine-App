import React from 'react';

//CSS Modules
import styles from './Card.module.css'

const Card = ({children, color, cardStyle}) => {

    const currentStyle = () =>{
        if(color === "pink")
            return styles.pinkCard
        else if(color === "blue")
            return styles.blueCard
        else if(color === "black")
            return styles.blackCard
        else
            return styles.whiteCard
    }

    return(
    <div className={currentStyle() + " " + cardStyle}>
        {children}
    </div>
    )
}

export default Card