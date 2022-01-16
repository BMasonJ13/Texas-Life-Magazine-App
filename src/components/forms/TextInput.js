
import React from 'react';

//CSS Modules
import styles from './TextInput.module.css'

const TextInput = ({onChange, inputStyle}) =>
{
    return(
        <input type="text" onChange={onChange} className={styles.input + " " + inputStyle}></input>
    )
}

export default TextInput;