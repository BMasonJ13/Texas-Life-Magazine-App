import React from "react";

//CSS Modules
import styles from './PDFInput.module.css'

const MPInput = ({ onChange, inputStyle }) => {

    return (
        <input className={styles.input + " " + inputStyle} type="file" accept=".mp3" onChange={onChange}></input>
    )

}

export default MPInput