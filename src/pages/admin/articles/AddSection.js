
import React, {useState} from 'react'

import ImageInput from '../../../components/forms/ImageInput'
import TextArea from '../../../components/forms/TextArea'
import DropDown from '../../../components/forms/DropDown'
import { Subtitle } from '../../../components/sub/text/Text'
import FormButton from '../../../components/forms/FormButton'
import {sendData} from '../../../utils/Storage'

import styles from './AddSection.module.css'
const AddSection = ({id, index, setData}) => {

    // eslint-disable-next-line no-unused-vars
    const [image, setImage] = useState(null)
    const [imageURL, setImageURL] = useState("")
    const [imageSize, setImageSize] = useState("small")
    const [para, setPara] = useState("")

    const handleA = (e) => {
        const file = e.target.files[0];
        setImage(file);
        const reader = new FileReader();

        reader.onloadend = () => {
            setImageURL(reader.result)
            handleChanges();
        }

        if (file) {
            reader.readAsDataURL(file);
            setImageURL(reader.result)
        }
        else {
            setImageURL(reader.result)
        }

        sendData(`articles/images/${new Date().getTime()}${index}`, file, (url) => {
            setImageURL(url);
            handleChanges();
        });
        
    }

    const handlePara = (e) => {
        setPara(e.target.value);
        handleChanges();
    }

    const handleSizeChange = (e) => {
        setImageSize(e.target.value)
        handleChanges();
    }

    const handleChanges = () => {
        setData(index, {
            image: imageURL,
            imageSize: imageSize,
            para: para,
        })
    }

    return(
        <div className={styles.elementContainer}>
            <Subtitle textStyle={styles.text}>Image for Section</Subtitle>
            <ImageInput inputStyle={styles.imageInput} onChange={handleA} />

            <Subtitle textStyle={styles.text}>Image Size for Section</Subtitle>
            <DropDown onChange={handleSizeChange}>
                <option value="small">Pick a size</option>
                <option value="small">small</option>
                <option value="medium">medium</option>
                <option value="large">large</option>
            </DropDown>
            <Subtitle textStyle={styles.text}>Paragraph for Section</Subtitle>
            <TextArea inputStyle={styles.textArea} onChange={handlePara} />
            <FormButton onClick={handleChanges}>SAVE</FormButton>
        </div>
    )
}

export default AddSection