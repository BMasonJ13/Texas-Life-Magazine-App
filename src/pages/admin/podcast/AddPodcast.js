import React, { useState } from "react";
import { sendData } from '../../../utils/Storage'
import { setDocument } from '../../../utils/Database'
import { useNavigate } from 'react-router-dom'

//Subcomponents
import TextInput from "../../../components/forms/TextInput";
import TextArea from '../../../components/forms/TextArea';
import DropDown from '../../../components/forms/DropDown';
import MPInput from '../../../components/forms/MPInput'
import FormButton from '../../../components/forms/FormButton'
import Card from "../../../components/sub/card/Card";
import { Subtitle, Paragraph } from '../../../components/sub/text/Text'

//Components
import PodcastCard from "../../../components/podcast-card/PodcastCard";
import PopUp from "../../../components/admin/PopUp";

//CSS Modules
import styles from './AddPodcast.module.css'


const AddPodcast = () =>
{

    const history = useNavigate();

    //States for upload
    const [mp3, setMP3] = useState(null); 
    const [title, setTitle] = useState("Test Title")
    const [des, setDes] = useState("Test Desc.")
    const [color, setColor] = useState("white")

    //States for popup
    const [loading, setLoading] = useState(false);

    const handleMP3Change = (e) => {
        setMP3(e.target.files[0]);
    }

    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }

    const handleDesChange = (e) => {
        setDes(e.target.value)
    }

    const handleColorChange = (e) => {
        setColor(e.target.value)
    }

    const handleSubmit = (e) => {
        setLoading(true);
        const date = new Date();
        let currentTime = date.getTime();

        PodcastData.id = currentTime;
        PodcastData.title = title;
        PodcastData.description = des;
        PodcastData.color = color;
        PodcastData.dateAdded = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`

        sendData(`podcasts/mp3/${currentTime}`, mp3, (url) => {
            PodcastData.mp3URL = url;
                setDocument("Podcasts", `${currentTime}`, PodcastData, () => {
                    setLoading(false);
                    history("/Podcasts")
                });

        });
    }

    return(
        <div className={styles.container}>
            <PopUp loading={loading} />
            <Card color="white" cardStyle={styles.card}>
                <Subtitle textStyle={styles.header}>Publication Editor</Subtitle>
                <div className={styles.innerContainer}>
                    <Paragraph textStyle={styles.paragraph}>Title</Paragraph>
                    <TextInput onChange={handleTitleChange}></TextInput>
                    <Paragraph textStyle={styles.paragraph}>Short Description</Paragraph>
                    <TextArea onChange={handleDesChange}></TextArea>
                    <Paragraph textStyle={styles.paragraph}>Podcast MP3 File</Paragraph>
                    <MPInput onChange={handleMP3Change} />
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
            <PodcastCard  title={title} description={des} color={color} cardStyle={styles.podcastCard}/>
        </div>
    )

}

const PodcastData =
{
    id: "",
    title: "",
    mp3URL: "",
    time: "",
    description: "",
    color: "",
    dateAdded: ""
}

export default AddPodcast