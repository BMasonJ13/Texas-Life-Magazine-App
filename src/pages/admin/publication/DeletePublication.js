import React, { useState, useEffect } from "react"

//Firebase - React Router Dom
import {doc, getDoc, deleteDoc} from 'firebase/firestore'
import {ref, deleteObject} from 'firebase/storage'
import {db, storage} from '../../../firebaseConfig'
import { useParams, useNavigate } from 'react-router-dom'

import { deleteDocument } from '../../../utils/Database'
import { deleteData } from "../../../utils/Storage"

//Subcomponents
import Card from '../../../components/sub/card/Card'
import {Header, Subtitle} from '../../../components/sub/text/Text'
import FormButton from '../../../components/forms/FormButton'

//Components
import PublicationCard from '../../../components/publication-card/PublicationCard'

//CSS Modules
import styles from './DeletePublication.module.css'

const DeletePublication = () =>
{

    const { id } = useParams();

    const history = useNavigate();
    const [data, setData] = useState(null);

    const getData = async () => {
        const snapshot = await getDoc(doc(db, "Publications", id.substring(1)))

        if (snapshot.exists()) {
            setData(snapshot.data());
        } else {
            console.log("Whoops!")
        }
    }

    const handleSubmit = async () =>
    {
        await deleteDocument("Publications", id.substring(1), () => {
            console.log("deleted.")
        })

        deleteData(`publications/images/${id.substring(1)}`, () => {
            deleteData(`publications/pdfs/${id.substring(1)}`, () => {
                history("/Archives");
            })
        })
    }

    useEffect(() => {
        getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return(
        <div className={styles.container}>
            <Card cardStyle={styles.card}>
                <Header>Are you sure?</Header>
                <Subtitle textStyle={styles.title}>There is no going back from this.</Subtitle>
                <FormButton textStyle={styles.button} onClick={handleSubmit} inputStyle={styles.button}>Delete</FormButton>
            </Card>
            {data && <PublicationCard editMode image={data.imageURL} title={data.title} description={data.description} color={data.color} />}
        </div>
    )

}

export default DeletePublication