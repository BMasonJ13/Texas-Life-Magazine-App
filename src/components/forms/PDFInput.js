import React from "react";

//CSS Modules
import styles from './PDFInput.module.css'

const PDFInput = ({ onChange, inputStyle }) => {

    return (
        <input className={styles.input + " " + inputStyle} type="file" accept="application/pdf" onChange={onChange}></input>
    )

}

export default PDFInput;