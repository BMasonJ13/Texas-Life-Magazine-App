import React from "react";

//CSS Modules
import styles from './ImageInput.module.css'

const ImageInput = ({onChange, inputStyle}) =>
{

    return(
        <input className={styles.input + " " + inputStyle} type="file" accept="image/png, image/jpeg" onChange={onChange}></input>
    )

}

export default ImageInput;