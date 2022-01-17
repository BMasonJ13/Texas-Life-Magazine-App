import React, {useState, useEffect} from 'react'

import { useParams, useNavigate } from 'react-router-dom'

//Firebase
import { sendData } from '../../../utils/Storage'
import { setDocument, getDocument } from '../../../utils/Database'

//Subcomponents
import Card from '../../../components/sub/card/Card'
import { Subtitle, Paragraph } from '../../../components/sub/text/Text'
import ImageInput from '../../../components/forms/ImageInput'
import TextInput from '../../../components/forms/TextInput'
import FormButton from '../../../components/forms/FormButton'
import PopUp from '../../../components/admin/PopUp'

//Components
import Ad from '../../../components/ad/Ad'

//CSS Modules
import styles from './AddSponsor.module.css'

const EditSponsor = () => 
{

    const history = useNavigate()
    const { type, id } = useParams();

    //States for upload
    const [sponsorID, setSponsorID] = useState("");
    const [dateAdded, setDateAdded] = useState("");
    const [imageChanged, setImageChanged] = useState(false);
    const [image, setImage] = useState("") //For Preview
    const [storageImage, setStorageImage] = useState(null)
    const [link, setLink] = useState("")

    //States for popup
    const [loading, setLoading] = useState(false)

    const handleImageChange = (e) => {
        setImageChanged(true);
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

        SponsorData.id = sponsorID;
        SponsorData.websiteURL = link;
        SponsorData.dateAdded = dateAdded;

        const redirect = type.substring(1).toLowerCase(); // Makes :Podcast => podcast
        const idTrip = id.substring(1); //Makes :1839215234 => 1839215234

        if(imageChanged)
        {
            sendData(`sponsors/${redirect}/${idTrip}`, storageImage, (url) => {
                SponsorData.imageURL = url;
                setDocument(`sponsor-${redirect}`, `${idTrip}`, SponsorData, () => {
                    setLoading(false);
                    history(`/${redirect}`)
                });
            })
        } else{
            SponsorData.imageURL = image;
            setDocument(`sponsor-${redirect}`, `${idTrip}`, SponsorData, () => {
                setLoading(false);
                history(`/${redirect}`)
            });
        }


    }

    const getData = async () =>
    {
        const redirect = type.substring(1).toLowerCase(); // Makes :Podcast => podcast
        const snapshot = await getDocument(`sponsor-${redirect}`, id.substring(1));

        if (snapshot) {
            setSponsorID(snapshot.id);
            setDateAdded(snapshot.dateAdded);
            setLink(snapshot.websiteURL);
            setImage(snapshot.imageURL);
        } else {
            console.log("Document could not be found in FireStore/Publications/")
        }
    }

    useEffect(() => {
        getData()
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

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
                <Ad image={image} path={link} />
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

export default EditSponsor