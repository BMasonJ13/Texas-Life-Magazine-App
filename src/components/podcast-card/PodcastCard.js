import React, { useState, useEffect } from 'react'
//Subcomponents
import Card from '../sub/card/Card';
import Icon from '../sub/icon/Icon'
import { Subtitle, Paragraph } from '../sub/text/Text'
import * as Icons from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

//CSS Modules
import styles from './PodcastCard.module.css'

const PodcastCard = ({ isAdmin, id, mp3URL, title, description, time, color, cardStyle}) =>
{

    const [play, setPlay] = useState(true);
    const [audio, setAudio] = useState(null);

    useEffect(() => {

        setAudio(new Audio(mp3URL))
    }, [setAudio, mp3URL])

    const handlePlay = () => {

        if(!audio)
            return

        if(play){
            audio.play();
            setPlay(false);
        }
        else{
            setPlay(true);
            audio.pause();
        }

        
    }
    
    return(
        <Card color={color} cardStyle={styles.card + " " + cardStyle}>
            <div className={styles.innerContainer}>
                <Icon onClick={handlePlay} color={color} icon={play ? Icons.faPlay : Icons.faPause} iconStyle={styles.icon}/>
                <div className={styles.infoContainer}>
                    <Subtitle color={color} textStyle={styles.title}>{title}</Subtitle>
                    <Paragraph color={color} textStyle={styles.description}>{description}</Paragraph>
                </div>
                <Subtitle color={color} textStyle={styles.time}>{time}</Subtitle>
            </div>
            {isAdmin && <div className={styles.adminContainer}>
                <Link className={styles.adminEdit} to={`/EditPodcast/:${id}`}><Icon iconStyle={styles.editIcon} icon={Icons.faPencilAlt} /></Link>
                <Link className={styles.adminDelete} to={`/DeletePodcast/:${id}`}><Icon iconStyle={styles.timesIcon} icon={Icons.faTrash} /></Link>
            </div>}
        </Card>
    )

}

export default PodcastCard