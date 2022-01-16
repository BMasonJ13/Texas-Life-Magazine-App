import React from "react";

//CSS Modules
import styles from './FormButton.module.css'

const PDFInput = ({ onClick, inputStyle, children }) => {

    return (
        <button className={styles.input + " " + inputStyle} onClick={onClick}>{children}</button>
    )

}

export default PDFInput;