import React from "react";
// import { sendData } from '../../../utils/Storage'
// import { setDocument } from '../../../utils/Database'
// import { useNavigate } from 'react-router-dom'

// //Subcomponents
// import TextInput from "../../../components/forms/TextInput";
// import TextArea from '../../../components/forms/TextArea';
// import DropDown from '../../../components/forms/DropDown';
// import ImageInput from '../../../components/forms/ImageInput'
// import FormButton from '../../../components/forms/FormButton'
// import Card from "../../../components/sub/card/Card";
// import { Subtitle, Paragraph } from '../../../components/sub/text/Text'

// //Components
// import ArticleCard from "../../../components/article-card/ArticleCard";
// import ModPopUp from "../../../components/admin/ModPopUp";
// import PopUp from "../../../components/admin/PopUp";
// import AddElementCard from '../../../components/admin/AddElementCard';

// //CSS Modules
// import styles from  './AddArticle.module.css'

// const AddArticle = () =>
// {

//     const [image, setImage] = useState("") //For Preview
//     const [storageImage, setStorageImage] = useState(null)
//     const [title, setTitle] = useState("Test Title")
//     const [des, setDes] = useState("Test Desc.")
//     const [color, setColor] = useState("white")
//     const [elements, setElements] = useState(null);
//     const [elementCounter, setElementCounter] = useState(0)

//     const elementsEdit = [];
//     const counter = 0;

//     const [loading, setLoading] = useState(false);

//     const [header, setHeader] = useState("")
//     const [headerEdit, setHeaderEdit] = useState(false);

//     const handleImageChange = (e) => {
//         const file = e.target.files[0];
//         setStorageImage(file);
//         const reader = new FileReader();

//         reader.onloadend = () => {
//             setImage(reader.result)
//         }
//         if (file) {
//             reader.readAsDataURL(file);
//             setImage(reader.result)
//         }
//         else {
//             setImage(reader.result)
//         }
//     }

//     const handleTitleChange = (e) => {
//         setTitle(e.target.value)
//     }

//     const handleDesChange = (e) => {
//         setDes(e.target.value)
//     }

//     const handleColorChange = (e) => {
//         setColor(e.target.value)
//     }

//     const handleHeader = () => 
//     {
//         setHeaderEdit(true)
//     }

//     const handleHeaderElement = (e) => 
//     {
//         setHeader(e.target.value)
//     }

//     const handleHeaderSubmit = () => {
//         setElementCounter(elementCounter + 1);
//         const Element =
//         {
//             counter: elementCounter,
//             header: header,
//             subtitle: "",
//             paragraph: "",
//             imageA: "",
//             imageB: "",
//             imageC: ""
//         }

//         elementsEdit.push(Element);
//         setHeaderEdit(false);
//     }

//     const handleSubtitle = () => {

//     }

//     const handleImage = () => {

//     }

//     const handleAction = () => {

//     }

//     const handleSubmit = () => {

//     }

//     const showElements = () => {

//         const ret = [];
//         for(let i = 0; i < elementsEdit.size; i++){
//             ret[i] = <Element />
//         }

//     }

//     return(
//         <section>
//             <div className={styles.container}>
//                 <PopUp loading={loading} />
//                 <Card color="white" cardStyle={styles.card}>
//                     <Subtitle textStyle={styles.header}>Article Editor</Subtitle>
//                     <div className={styles.innerContainer}>
//                         <Paragraph textStyle={styles.paragraph}>Publication Cover Image</Paragraph>
//                         <ImageInput onChange={handleImageChange}></ImageInput>
//                         <Paragraph textStyle={styles.paragraph}>Title</Paragraph>
//                         <TextInput onChange={handleTitleChange}></TextInput>
//                         <Paragraph textStyle={styles.paragraph}>Short Description</Paragraph>
//                         <TextArea onChange={handleDesChange}></TextArea>
//                         <Paragraph textStyle={styles.paragraph}>Card Color</Paragraph>
//                         <DropDown onChange={handleColorChange}>
//                             <option value="white">Pick a color</option>
//                             <option value="white">White</option>
//                             <option value="black">Black</option>
//                             <option value="blue">Blue</option>
//                             <option value="pink">Pink</option>
//                         </DropDown>
//                         <FormButton onClick={handleSubmit} inputStyle={styles.button}>Submit</FormButton>
//                     </div>
//                 </Card>
//                 <ArticleCard  image={image} title={title} description={des} color={color}/>
//             </div>
//             {showElements()}
//             <div className={styles.container}>
//                 <AddElementCard handleClick={handleHeader} cardStyle={styles.adminCard} action="Add Header"/>
//                 <AddElementCard handleClick={handleSubtitle} cardStyle={styles.adminCard} action="Add Subtitle" />
//                 <AddElementCard handleClick={handleImage} cardStyle={styles.adminCard} action="Add Image" />
//                 <AddElementCard handleClick={handleAction} cardStyle={styles.adminCard} action="Add Action"/>
//             </div>
//             <ModPopUp loading={headerEdit}>
//                 <Subtitle>Header Text</Subtitle>
//                 <TextInput onChange={handleHeaderElement}></TextInput>
//                 <FormButton onClick={handleHeaderSubmit}>Submit</FormButton>
//             </ModPopUp>
//         </section>
//     )

//}

// const ArticleData = 
// {

//     id: "",
//     title: "",
//     description: "",
//     elements: [],

// }

const AddArticle = () => {
    return(
        <>
        </>
    )
}

export default AddArticle;