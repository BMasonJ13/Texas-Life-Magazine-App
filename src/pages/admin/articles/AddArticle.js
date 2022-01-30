import React, { useState} from "react";
import { sendData } from '../../../utils/Storage'
import { setDocument } from '../../../utils/Database'
import { useNavigate, useParams } from 'react-router-dom'

//Subcomponents
import TextInput from "../../../components/forms/TextInput";
import TextArea from '../../../components/forms/TextArea';
import DropDown from '../../../components/forms/DropDown';
import ImageInput from '../../../components/forms/ImageInput'
import FormButton from '../../../components/forms/FormButton'
import Card from "../../../components/sub/card/Card";
import { Header, Subtitle, Paragraph } from '../../../components/sub/text/Text'

//Components
import ArticleCard from "../../../components/article-card/ArticleCard";
import PopUp from "../../../components/admin/PopUp";
import AddSection from './AddSection'
import ElementSection from '../../../components/super/ElementSection'

//CSS Modules
import styles from  './AddArticle.module.css'

const AddArticle = () =>
{

    const history = useNavigate()
    const { type } = useParams();

    //Card Stuff
    const [image, setImage] = useState("") //For Preview
    const [storageImage, setStorageImage] = useState(null)
    const [title, setTitle] = useState("Test Title")
    const [des, setDes] = useState("Test Desc.")
    const [color, setColor] = useState("white")

    //Blog Stuff
    const [show, setShow] = useState(true)
    const [count, setCount] = useState(12);
    const [sections, setSections] = useState([
        {
            imageURL: "",
            imageSize: "",
            para: ""
        }
        ])

    const [head, setHead] = useState("")

    //Loading Stuff
    const [loading, setLoading] = useState(false);

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

    //CARD
    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }

    const handleDesChange = (e) => {
        setDes(e.target.value)
    }

    const handleColorChange = (e) => {
        setColor(e.target.value)
    }

    //Blog
    const setData = (index, sectionData) => {
        
        let newArr = [...sections];
        newArr[index] = sectionData;
        
        setSections(newArr)
        console.log(newArr)
        ArticleData.sections = sections;
    }

    //Submit
    const handleSubmit = () => {
        setLoading(true)
        const date = new Date();
        const currentTime = date.getTime();
        ArticleData.id = currentTime;
        ArticleData.title = title;
        ArticleData.description = des;
        ArticleData.color = color;
        ArticleData.dateAdded = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
        ArticleData.header = head;

        ArticleData.sections = sections;

        sendData(`articles-${type.substring(1).toLowerCase()}/images/${currentTime}`, storageImage , (url) => {
            ArticleData.coverURL = url;
            setDocument(`Articles-${type.substring(1).toLowerCase()}`, `${currentTime}`, ArticleData, () => {
                setLoading(false);
                history(`/${type.substring(1).toLowerCase()}`)
            });
        })

        console.log(ArticleData)

    }

    const showSection = () => {
        let sec = [];

        for(let i = 0; i < count; i++){
            sec[i] = <AddSection id={new Date().getTime() + " " + i} key={i} index={i} setData={setData} />
        }

        return sec;
    }

    const prepareData = () => {

        let s = [];
        const count = Math.ceil(ArticleData.sections.length);

        for (let i = 0; i < count; i+=4) {
            s[i] = <ElementSection key={i} 
            section1={ArticleData.sections[i]} 
            section2={ArticleData.sections[i + 1]} 
            section3={ArticleData.sections[i + 2]} 
            section4={ArticleData.sections[i + 3]} 
            ad1={{imageURL: "https://picsum.photos/256"}}
            ad2={{ imageURL: "https://picsum.photos/256" }}
            ad3={{ imageURL: "https://picsum.photos/256" }}
            ad4={{ imageURL: "https://picsum.photos/256" }}
            />
        }
        return s;
    }

    return(
        <section>
            <div className={styles.container}>
                <PopUp loading={loading} />
                <Card color="white" cardStyle={styles.card}>
                    <Subtitle textStyle={styles.header}>Article Editor</Subtitle>
                    <div className={styles.innerContainer}>
                        <Paragraph textStyle={styles.paragraph}>Publication Cover Image</Paragraph>
                        <ImageInput onChange={handleImageChange}></ImageInput>
                        <Paragraph textStyle={styles.paragraph}>Title</Paragraph>
                        <TextInput onChange={handleTitleChange}></TextInput>
                        <Paragraph textStyle={styles.paragraph}>Short Description</Paragraph>
                        <TextArea onChange={handleDesChange}></TextArea>
                        <Paragraph textStyle={styles.paragraph}>Card Color</Paragraph>
                        <DropDown onChange={handleColorChange}>
                            <option value="white">Pick a color</option>
                            <option value="white">White</option>
                            <option value="black">Black</option>
                            <option value="blue">Blue</option>
                            <option value="pink">Pink</option>
                        </DropDown>
                    </div>
                </Card>
                <ArticleCard  image={image} title={title} description={des} color={color}/>
            </div>
            <div className={styles.elementContainer}>
                <FormButton onClick={() => setShow(!show)}>{show ? "Show Preview" : "Show Editor"}</FormButton>
            </div>
            <div className={show ? styles.show : styles.hidden}>
                <div className={styles.elementContainer}>
                    <Subtitle>Title for Article</Subtitle>
                    <TextInput onChange={(e) => setHead(e.target.value)}/>
                </div>
                
                {showSection()}

            </div>
            <div className={!show ? styles.show : styles.hidden}>
                <Header textStyle={styles.header}>{head}</Header>
                {prepareData()}
            </div>
            <div className={styles.container}>
                <FormButton onClick={handleSubmit} inputStyle={styles.button}>Submit</FormButton>
            </div>
            <div>

            </div>
        </section>
    )

}

const ArticleData = 
{

    id: "",
    coverURL: "",
    title: "",
    description: "",
    color: "",
    dateAdded: "",

    header: "",

    sections: [],

}

export default AddArticle;