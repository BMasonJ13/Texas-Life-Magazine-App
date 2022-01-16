import React from "react";

//CSS Modules
import styles from './DropDown.module.css'

const DropDown = ({ onChange, inputStyle, children}) => {

    return (
        <select className={styles.input + " " + inputStyle} onChange={onChange}>
            {children}
        </select>
    )

}

export default DropDown;