
import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { sendData } from '../../../utils/Storage'
import { setDocument, getDocument } from '../../../utils/Database';

//Subcomponents
import TextInput from "../../../components/forms/TextInput";
import TextArea from '../../../components/forms/TextArea';
import ImageInput from "../../../components/forms/ImageInput";
import PDFInput from "../../../components/forms/PDFInput";
import DropDown from '../../../components/forms/DropDown';
import FormButton from '../../../components/forms/FormButton'
import Card from "../../../components/sub/card/Card";
import { Subtitle, Paragraph } from '../../../components/sub/text/Text'

//Components
import PublicationCard from '../../../components/publication-card/PublicationCard'
import PopUp from "../../../components/admin/PopUp";

//CSS Modules
import styles from './AddPublication.module.css'

const EditPublication = () => 
{

    const { id } = useParams();

    const getData = async() =>
    {
        const snapshot = await getDocument("Publications", id.substring(1));

        if(snapshot)
        {
            setID(snapshot.id);
            setDateAdded(snapshot.dateAdded);
            setTitle(snapshot.title);
            setDes(snapshot.description);
            setColor(snapshot.color);
            setImage(snapshot.imageURL);
            setPDFURL(snapshot.pdfURL)
        } else{
            console.log("Document could not be found in FireStore/Publications/")
        }
    }

    useEffect(() =>{

        getData()

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    //States for upload
    const history = useNavigate();
    const [cardID, setID] = useState("")
    const [dateAdded, setDateAdded] = useState("")
    const [image, setImage] = useState("") //For Preview
    const [storageImage, setStorageImage] = useState(null)
    const [title, setTitle] = useState("Test Title")
    const [des, setDes] = useState("Test Desc.")
    const [pdfURL, setPDFURL] = useState("");
    const [pdf, setPDF] = useState(null)
    const [color, setColor] = useState("white")

    const [imageChanged, setImageChanged] = useState(false)
    const [pdfChanged, setPDFChanged] = useState(false)

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

        setImageChanged(true)
    }

    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }

    const handleDesChange = (e) => {
        setDes(e.target.value)
    }

    const handlePDFChange = (e) => {
        setPDF(e.target.files[0])
        setPDFChanged(true)
    }

    const handleColorChange = (e) => {
        setColor(e.target.value)
    }

    const handleSubmit = (e) => {
        setLoading(true);

        PublicationData.id = cardID;
        PublicationData.title = title;
        PublicationData.description = des;
        PublicationData.color = color;
        PublicationData.dateAdded = dateAdded;

        if(imageChanged && pdfChanged){
            sendData(`publications/images/${cardID}`, storageImage, (url) => {
                PublicationData.imageURL = url;
                sendData(`publications/pdfs/${cardID}`, pdf, (url) => {
                    PublicationData.pdfURL = url;
                    setDocument("Publications", `${cardID}`, PublicationData, () => {
                        setLoading(false);
                        history("/Archives")
                    });
                });

            });
        } else if(imageChanged){
            sendData(`publications/images/${cardID}`, storageImage, (url) => {
                PublicationData.imageURL = url;
                setDocument("Publications", `${cardID}`, PublicationData, () => {
                    setLoading(false);
                    history("/Archives")
                });
            })
        } else if(pdfChanged){
            sendData(`publications/images/${cardID}`, pdf, (url) => {
                    PublicationData.pdfURL = url;
                    setDocument("Publications", `${cardID}`, PublicationData, () => {
                        setLoading(false);
                        history("/Archives")
                    });
                })
        } else{
            PublicationData.imageURL = image;
            PublicationData.pdfURL = pdfURL;
            setDocument("Publications", `${cardID}`, PublicationData, () => {
                setLoading(false);
                history("/Archives")
            });
        }
    }

    //Component Data
    return(
        <div className={styles.container}>
            <PopUp loading={loading} />
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
            <PublicationCard editMode image={image} title={title} description={des} color={color} />
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

export default EditPublication