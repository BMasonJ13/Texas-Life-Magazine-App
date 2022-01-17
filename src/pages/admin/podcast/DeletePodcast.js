import React, { useState, useEffect } from "react"

//Firebase - React Router Dom
import { useParams, useNavigate } from 'react-router-dom'
import { deleteDocument, getDocument } from '../../../utils/Database'
import { deleteData } from "../../../utils/Storage"

//Subcomponents
import Card from '../../../components/sub/card/Card'
import { Header, Subtitle } from '../../../components/sub/text/Text'
import FormButton from '../../../components/forms/FormButton'

//Components
import PodcastCard from "../../../components/podcast-card/PodcastCard"
import PopUp from '../../../components/admin/PopUp'

//CSS Modules
import styles from './DeletePodcast.module.css'

const DeletePodcast = () => {

    const { id } = useParams();

    const history = useNavigate();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    const getData = async () => {

        const json = await getDocument("Podcasts", id.substring(1))

        setData(json);
    }

    const handleSubmit = async () => {
        setLoading(true)

        await deleteDocument("Podcasts", id.substring(1), () => {
            console.log("deleted.")
        })

        deleteData(`podcasts/mp3/${id.substring(1)}`, () => {
            setLoading(false)
            history("/Podcasts");
        })
    }

    useEffect(() => {
        getData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className={styles.container}>
            <PopUp loading={loading} />
            <Card cardStyle={styles.card}>
                <Header>Are you sure?</Header>
                <Subtitle textStyle={styles.title}>There is no going back from this.</Subtitle>
                <FormButton textStyle={styles.button} onClick={handleSubmit} inputStyle={styles.button}>Delete</FormButton>
            </Card>
            {data && <PodcastCard title={data.title} description={data.description} color={data.color} time={data.time} cardStyle={styles.podcastCard} />}
        </div>
    )

}

export default DeletePodcast