import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

//Firebase
import { sendData } from '../../../utils/Storage'
import { setDocument } from '../../../utils/Database'

//Subcomponents
import Card from '../../../components/sub/card/Card'
import {Subtitle, Paragraph} from '../../../components/sub/text/Text'
import ImageInput from '../../../components/forms/ImageInput'
import TextInput from '../../../components/forms/TextInput'
import FormButton from '../../../components/forms/FormButton'
import PopUp from '../../../components/admin/PopUp'

//Components
import Ad from '../../../components/ad/Ad'

//CSS Modules
import styles from './AddSponsor.module.css'

const AddSponsor = () =>
{

    const history = useNavigate()
    const { type } = useParams();

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

        const date = new Date();
        const currentTime = date.getTime();
        SponsorData.id = currentTime;
        SponsorData.websiteURL = link;
        SponsorData.dateAdded = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`

        const redirect = type.substring(1).toLowerCase(); // Makes :Podcast => podcast

        sendData(`sponsors/${redirect}/${currentTime}`, storageImage, (url) => {
            SponsorData.imageURL = url;
            setDocument(`sponsor-${redirect}`, `${currentTime}`, SponsorData, () => {
                setLoading(false);
                history(`/${redirect}`)
            });
        })

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


const SponsorData =
{
    id: "",
    websiteURL: "",
    imageURL: "",
    dateAdded: ""
}

export default AddSponsor;