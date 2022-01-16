import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import styles from './AddSponsor.module.css'

//Subcomponents
import Card from '../../../components/sub/card/Card'
import {Subtitle, Paragraph} from '../../../components/sub/text/Text'
import ImageInput from '../../../components/forms/ImageInput'
import TextInput from '../../../components/forms/TextInput'
import FormButton from '../../../components/forms/FormButton'
import PopUp from '../../../components/admin/PopUp'

//Components
import Ad from '../../../components/ad/Ad'

const AddSponsor = () =>
{

    const history = useNavigate()

    //States for upload
    const [image, setImage] = useState("") //For Preview
    const [storageImage, setStorageImage] = useState(null)
    const [link, setLink] = useState("")

    //States for popup
    const [loading, setLoading] = useState(false)

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setStorageImage(file);
        const reader = new FileReader();

        reader.onloadend = () => {
            setImage(reader.result)
        }
        if (file) {
            reader.readAsDataURL(file);
            setImage(reader.result)
        }
        else {
            setImage(reader.result)
        }
    }

    const handleTitleChange = (e) => {
        setLink(e.target.value)
    }

    const handleSubmit = (e) => {
        setLoading(true);

    }

    return(
        <div>
            <div className={styles.container}>
                <PopUp loading={loading} />
                <Card color="white" cardStyle={styles.card}>
                    <Subtitle textStyle={styles.header}>Ad Editor</Subtitle>
                    <div className={styles.innerContainer}>
                        <Paragraph textStyle={styles.paragraph}>Ad Cover Image</Paragraph>
                        <ImageInput onChange={handleImageChange}></ImageInput>
                        <Paragraph textStyle={styles.paragraph}>Website URL</Paragraph>
                        <TextInput onChange={handleTitleChange}></TextInput>
                        <FormButton onClick={handleSubmit} inputStyle={styles.button}>Submit</FormButton>
                    </div>
                </Card>
                <Ad image={image} path={link}/>
            </div>
        </div>
    )
}

export default AddSponsor;