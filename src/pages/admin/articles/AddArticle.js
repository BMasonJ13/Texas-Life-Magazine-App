import React, {useState} from "react";
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
import { Subtitle, Paragraph } from '../../../components/sub/text/Text'

//Components
import ArticleCard from "../../../components/article-card/ArticleCard";
import PopUp from "../../../components/admin/PopUp";
import Element from '../../../components/admin/Element'

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

    const [head, setHead] = useState("")

    const [img1, setImg1] = useState("")
    const [imgA, setImgA] = useState("")
    const [para1, setPara1] = useState("")

    const [img2, setImg2] = useState("")
    const [imgB, setImgB] = useState("")
    const [para2, setPara2] = useState("")

    const [img3, setImg3] = useState("")
    const [imgC, setImgC] = useState("")
    const [para3, setPara3] = useState("")

    const [img4, setImg4] = useState("")
    const [imgD, setImgD] = useState("")
    const [para4, setPara4] = useState("")

    const [img5, setImg5] = useState("")
    const [imgE, setImgE] = useState("")
    const [para5, setPara5] = useState("")

    const [img6, setImg6] = useState("")
    const [imgF, setImgF] = useState("")
    const [para6, setPara6] = useState("")

    const [img7, setImg7] = useState("")
    const [imgG, setImgG] = useState("")
    const [para7, setPara7] = useState("")

    const [img8, setImg8] = useState("")
    const [imgH, setImgH] = useState("")
    const [para8, setPara8] = useState("")

    const [img9, setImg9] = useState("")
    const [imgI, setImgI] = useState("")
    const [para9, setPara9] = useState("")

    const [img10, setImg10] = useState("")
    const [imgJ, setImgJ] = useState("")
    const [para10, setPara10] = useState("")

    const [img11, setImg11] = useState("")
    const [imgK, setImgK] = useState("")
    const [para11, setPara11] = useState("")

    const [img12, setImg12] = useState("")
    const [imgL, setImgL] = useState("")
    const [para12, setPara12] = useState("")

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

    //BLOG

    const handleA = (e) => {
        const file = e.target.files[0];
        setImg1(file);
        const reader = new FileReader();

        reader.onloadend = () => {
            setImgA(reader.result)
        }
        if (file) {
            reader.readAsDataURL(file);
            setImgA(reader.result)
        }
        else {
            setImgA(reader.result)
        }
    }

    const handleB = (e) => {
        const file = e.target.files[0];
        setImg2(file);
        const reader = new FileReader();

        reader.onloadend = () => {
            setImgB(reader.result)
        }
        if (file) {
            reader.readAsDataURL(file);
            setImgB(reader.result)
        }
        else {
            setImgB(reader.result)
        }
    }

    const handleC = (e) => {
        const file = e.target.files[0];
        setImg3(file);
        const reader = new FileReader();

        reader.onloadend = () => {
            setImgC(reader.result)
        }
        if (file) {
            reader.readAsDataURL(file);
            setImgC(reader.result)
        }
        else {
            setImgC(reader.result)
        }
    }

    const handleD = (e) => {
        const file = e.target.files[0];
        setImg4(file);
        const reader = new FileReader();

        reader.onloadend = () => {
            setImgD(reader.result)
        }
        if (file) {
            reader.readAsDataURL(file);
            setImgD(reader.result)
        }
        else {
            setImgD(reader.result)
        }
    }

    const handleE = (e) => {
        const file = e.target.files[0];
        setImg5(file);
        const reader = new FileReader();

        reader.onloadend = () => {
            setImgE(reader.result)
        }
        if (file) {
            reader.readAsDataURL(file);
            setImgE(reader.result)
        }
        else {
            setImgE(reader.result)
        }
    }

    const handleF = (e) => {
        const file = e.target.files[0];
        setImg6(file);
        const reader = new FileReader();

        reader.onloadend = () => {
            setImgF(reader.result)
        }
        if (file) {
            reader.readAsDataURL(file);
            setImgF(reader.result)
        }
        else {
            setImgF(reader.result)
        }
    }

    const handleG = (e) => {
        const file = e.target.files[0];
        setImg7(file);
        const reader = new FileReader();

        reader.onloadend = () => {
            setImgG(reader.result)
        }
        if (file) {
            reader.readAsDataURL(file);
            setImgG(reader.result)
        }
        else {
            setImgG(reader.result)
        }
    }

    const handleH = (e) => {
        const file = e.target.files[0];
        setImg8(file);
        const reader = new FileReader();

        reader.onloadend = () => {
            setImgH(reader.result)
        }
        if (file) {
            reader.readAsDataURL(file);
            setImgH(reader.result)
        }
        else {
            setImgH(reader.result)
        }
    }

    const handleI = (e) => {
        const file = e.target.files[0];
        setImg9(file);
        const reader = new FileReader();

        reader.onloadend = () => {
            setImgI(reader.result)
        }
        if (file) {
            reader.readAsDataURL(file);
            setImgI(reader.result)
        }
        else {
            setImgI(reader.result)
        }
    }

    const handleJ = (e) => {
        const file = e.target.files[0];
        setImg10(file);
        const reader = new FileReader();

        reader.onloadend = () => {
            setImgJ(reader.result)
        }
        if (file) {
            reader.readAsDataURL(file);
            setImgJ(reader.result)
        }
        else {
            setImgJ(reader.result)
        }
    }

    const handleK = (e) => {
        const file = e.target.files[0];
        setImg11(file);
        const reader = new FileReader();

        reader.onloadend = () => {
            setImgK(reader.result)
        }
        if (file) {
            reader.readAsDataURL(file);
            setImgK(reader.result)
        }
        else {
            setImgK(reader.result)
        }
    }

    const handleL = (e) => {
        const file = e.target.files[0];
        setImg12(file);
        const reader = new FileReader();

        reader.onloadend = () => {
            setImgL(reader.result)
        }
        if (file) {
            reader.readAsDataURL(file);
            setImgL(reader.result)
        }
        else {
            setImgL(reader.result)
        }
    }

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

        ArticleData.para1 = para1;
        ArticleData.para2 = para2;
        ArticleData.para3 = para3;
        ArticleData.para4 = para4;
        ArticleData.para5 = para5;
        ArticleData.para6 = para6;
        ArticleData.para7 = para7;
        ArticleData.para8 = para8;
        ArticleData.para9 = para9;
        ArticleData.para10 = para10;
        ArticleData.para11 = para11;
        ArticleData.para12 = para12;

        const localType = type.substring(1).toLowerCase();
        console.log(type)
        sendData(`articles/${localType}/${currentTime}/images/${currentTime}0`, storageImage, (url) => {
            ArticleData.coverURL = url;
        sendData(`articles/${localType}/${currentTime}/images/${currentTime}1`, img1, (url) => {
            ArticleData.image1 = url;
            sendData(`articles/${localType}/${currentTime}/images/${currentTime}2`, img2, (url) => {
                ArticleData.image2 = url;
                sendData(`articles/${localType}/${currentTime}/images/${currentTime}3`, img3, (url) => {
                    ArticleData.image3 = url;
                    sendData(`articles/${localType}/${currentTime}/images/${currentTime}4`, img4, (url) => {
                        ArticleData.image4 = url;
                        sendData(`articles/${localType}/${currentTime}/images/${currentTime}5`, img5, (url) => {
                            ArticleData.image5 = url;
                            sendData(`articles/${localType}/${currentTime}/images/${currentTime}6`, img6, (url) => {
                                ArticleData.image6 = url;
                                sendData(`articles/${localType}/${currentTime}/images/${currentTime}7`, img7, (url) => {
                                    ArticleData.image7 = url;
                                    sendData(`articles/${localType}/${currentTime}/images/${currentTime}8`, img8, (url) => {
                                        ArticleData.image8 = url;
                                        sendData(`articles/${localType}/${currentTime}/images/${currentTime}9`, img9, (url) => {
                                            ArticleData.image9 = url;
                                            sendData(`articles/${localType}/${currentTime}/images/${currentTime}10`, img10, (url) => {
                                                ArticleData.image10 = url;
                                                sendData(`articles/${localType}/${currentTime}/images/${currentTime}11`, img11, (url) => {
                                                    ArticleData.image11 = url;
                                                    sendData(`articles/${localType}/${currentTime}/images/${currentTime}12`, img12, (url) => {
                                                        ArticleData.image12 = url;
                                                        setDocument(`Articles-${localType}`, `${currentTime}`, ArticleData, () => {
                                                            setLoading(false);
                                                            history(`/${localType}`)
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });

        console.log(ArticleData)

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

                <div className={styles.elementContainer}>
                    <ImageInput onChange={handleA}/>
                    <TextArea onChange={(e) => setPara1(e.target.value)}/>
                </div>

                <div className={styles.elementContainer}>
                    <ImageInput onChange={handleB} />
                    <TextArea onChange={(e) => setPara2(e.target.value)} />
                </div>

                <div className={styles.elementContainer}>
                    <ImageInput onChange={handleC} />
                    <TextArea onChange={(e) => setPara3(e.target.value)} />
                </div>

                <div className={styles.elementContainer}>
                    <ImageInput onChange={handleD} />
                    <TextArea onChange={(e) => setPara4(e.target.value)} />
                </div>

                <div className={styles.elementContainer}>
                    <ImageInput onChange={handleE} />
                    <TextArea onChange={(e) => setPara5(e.target.value)} />
                </div>

                <div className={styles.elementContainer}>
                    <ImageInput onChange={handleF} />
                    <TextArea onChange={(e) => setPara6(e.target.value)} />
                </div>

                <div className={styles.elementContainer}>
                    <ImageInput onChange={handleG} />
                    <TextArea onChange={(e) => setPara7(e.target.value)} />
                </div>

                <div className={styles.elementContainer}>
                    <ImageInput onChange={handleH} />
                    <TextArea onChange={(e) => setPara8(e.target.value)} />
                </div>

                <div className={styles.elementContainer}>
                    <ImageInput onChange={handleI} />
                    <TextArea onChange={(e) => setPara9(e.target.value)} />
                </div>

                <div className={styles.elementContainer}>
                    <ImageInput onChange={handleJ} />
                    <TextArea onChange={(e) => setPara10(e.target.value)} />
                </div>

                <div className={styles.elementContainer}>
                    <ImageInput onChange={handleK} />
                    <TextArea onChange={(e) => setPara11(e.target.value)} />
                </div>

                <div className={styles.elementContainer}>
                    <ImageInput onChange={handleL} />
                    <TextArea onChange={(e) => setPara12(e.target.value)} />
                </div>

            </div>
            <div className={!show ? styles.show : styles.hidden}>
                <Element
                header={head} 
                para1={para1} 
                image1={imgA}
                para2={para2} 
                image2={imgB}
                para3={para3}
                image3={imgC}
                para4={para4}
                image4={imgD}
                para5={para5}
                image5={imgE}
                para6={para6}
                image6={imgF}
                para7={para7}
                image7={imgG}
                para8={para8} 
                image8={imgH}
                para9={para9} 
                image9={imgI}
                para10={para10}
                image10={imgJ}
                para11={para11}
                image11={imgK}
                para12={para12}
                image12={imgL}
                />
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

    image1: "",
    para1 : "",

    image2: "",
    para2: "",

    image3: "",
    para3: "",

    image4: "",
    para4: "",

    image5: "",
    para5: "",

    image6: "",
    para6: "",

    image7: "",
    para7: "",

    image8: "",
    para8: "",

    image9: "",
    para9: "",

    image10: "",
    para10: "",

    image11: "",
    para11: "",

    image12: "",
    para12: "",

}

export default AddArticle;