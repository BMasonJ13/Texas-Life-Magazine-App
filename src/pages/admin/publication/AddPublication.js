import React, {useState} from "react";
import { sendData } from '../../../utils/Storage'
import { setDocument } from '../../../utils/Database'
import { useNavigate } from 'react-router-dom'

//Subcomponents
import TextInput from "../../../components/forms/TextInput";
import TextArea from '../../../components/forms/TextArea';
import ImageInput from "../../../components/forms/ImageInput";
import PDFInput from "../../../components/forms/PDFInput";
import DropDown from '../../../components/forms/DropDown';
import FormButton from '../../../components/forms/FormButton'
import Card from "../../../components/sub/card/Card";
import {Subtitle, Paragraph} from '../../../components/sub/text/Text'

//Components
import PublicationCard from '../../../components/publication-card/PublicationCard'
import PopUp from "../../../components/admin/PopUp";

//CSS Modules
import styles from './AddPublication.module.css'



const AddPublication = () =>
{


    const history = useNavigate()

    //States for upload
    const [image, setImage] = useState("") //For Preview
    const [storageImage, setStorageImage] = useState(null)
    const [title, setTitle] = useState("Test Title")
    const [des, setDes] = useState("Test Desc.")
    const [pdf, setPDF] = useState(null)
    const [color, setColor] = useState("white")

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

    const handleTitleChange = (e) =>
    {
        setTitle(e.target.value)
    }

    const handleDesChange = (e) => 
    {
        setDes(e.target.value)
    }

    const handlePDFChange = (e) => 
    {
        setPDF(e.target.files[0])
    }

    const handleColorChange = (e) => 
    {
        setColor(e.target.value)
    }

    const handleSubmit = (e) =>
    {
        setLoading(true);
        const date = new Date();
        PublicationData.id = date.getTime();
        PublicationData.title = title;
        PublicationData.description = des;
        PublicationData.color = color;
        PublicationData.dateAdded = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
        
        let currentTime = date.getTime();

        sendData(`publications/images/${currentTime}`, storageImage, (url) => {
            PublicationData.imageURL = url;
            sendData(`publications/pdfs/${currentTime}`, pdf, (url) => {
                PublicationData.pdfURL = url;
                setDocument("Publications", `${currentTime}`, PublicationData, () => {
                    setLoading(false);
                    history("/Archives")
                });
            });
            
        });
    }

    return(
        <div className={styles.container}>
            <PopUp loading={loading}/>
            <Card color="white" cardStyle={styles.card}>
                <Subtitle textStyle={styles.header}>Publication Editor</Subtitle>
                <div className={styles.innerContainer}>
                    <Paragraph textStyle={styles.paragraph}>Publication Cover Image</Paragraph>
                    <ImageInput onChange={handleImageChange}></ImageInput>
                    <Paragraph textStyle={styles.paragraph}>Title</Paragraph>
                    <TextInput onChange={handleTitleChange}></TextInput>
                    <Paragraph textStyle={styles.paragraph}>Short Description</Paragraph>
                    <TextArea onChange={handleDesChange}></TextArea>
                    <Paragraph textStyle={styles.paragraph}>Publication PDF File</Paragraph>
                    <PDFInput onChange={handlePDFChange}></PDFInput>
                    <Paragraph textStyle={styles.paragraph}>Card Color</Paragraph>
                    <DropDown onChange={handleColorChange}>
                        <option value="white">Pick a color</option>
                        <option value="white">White</option>
                        <option value="black">Black</option>
                        <option value="blue">Blue</option>
                        <option value="pink">Pink</option>
                    </DropDown>
                    <FormButton onClick={handleSubmit} inputStyle={styles.button}>Submit</FormButton>
                </div>
            </Card>
            <PublicationCard editMode image={image} title={title} description={des} color={color}/>
        </div>
    )

}

const PublicationData = 
{
    id: "",
    title: "",
    description: "",
    imageURL: "",
    pdfURL: "",
    color: "",
    dateAdded: ""
}

export default AddPublication