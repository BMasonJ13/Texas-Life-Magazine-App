import React, { useState, useEffect } from "react"

//Firebase - React Router Dom
import { useParams, useNavigate } from 'react-router-dom'
import { deleteDocument, getDocument } from '../../../utils/Database'
import { deleteData } from "../../../utils/Storage"

//Subcomponents
import Card from '../../../components/sub/card/Card'
import {Header, Subtitle} from '../../../components/sub/text/Text'
import FormButton from '../../../components/forms/FormButton'

//Components
import PublicationCard from '../../../components/publication-card/PublicationCard'
import PopUp from '../../../components/admin/PopUp'

//CSS Modules
import styles from './DeletePublication.module.css'

const DeletePublication = () =>
{

    const { id } = useParams();

    const history = useNavigate();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    const getData = async () => {

        const json = await getDocument("Publications", id.substring(1))

        setData(json);
    }

    const handleSubmit = async () =>
    {
        setLoading(true)

        await deleteDocument("Publications", id.substring(1), () => {
            console.log("deleted.")
        })

        deleteData(`publications/images/${id.substring(1)}`, () => {
            deleteData(`publications/pdfs/${id.substring(1)}`, () => {
                setLoading(false)
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
            <PopUp loading={loading}/>
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