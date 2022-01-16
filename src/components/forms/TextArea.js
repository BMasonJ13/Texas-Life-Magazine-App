import React from 'react'

//CSS Modules
import styles from './TextArea.module.css'

const TextArea = ({ onChange, inputStyle }) => {
    return (
        <textarea type="text" rows="3" onChange={onChange} className={styles.input + " " + inputStyle}></textarea>
    )
}

export default TextArea