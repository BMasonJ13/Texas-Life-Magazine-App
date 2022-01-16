import React from 'react';

//Subcomponents
import Card from '../sub/card/Card';
import { Subtitle, Paragraph } from '../sub/text/Text'
import Button from '../sub/button/Button';
import { Link } from 'react-router-dom';
import Icon from '../sub/icon/Icon';
import * as Icons from '@fortawesome/free-solid-svg-icons'

//CSS Modules
import styles from './PublicationCard.module.css'



const PublicationCard = ({isAdmin, editMode, id, image, title, description, path, color, cardStyle}) =>
{

    return(
        <Card color={color} cardStyle={styles.card + " " + cardStyle}>
            <div className={styles.innerContainer}>
                <img className={styles.image} src={image} alt=""/>
                <Subtitle color={color} textStyle={styles.title}>{title}</Subtitle>
                <Paragraph color={color} textStyle={styles.description}>{description}</Paragraph>
                {editMode ? <Button path="#" color={color} buttonStyle={styles.action}>View Magazine</Button>
                : <Button path={path} color={color} buttonStyle={styles.action} externalLink>View Magazine</Button>}
            </div>
            {isAdmin && <div className={styles.adminContainer}>
                <Link className={styles.adminEdit} to={`/EditPublication/:${id}`}><Icon iconStyle={styles.icon} icon={Icons.faPencilAlt}/></Link>
                <Link className={styles.adminDelete} to={`/DeletePublication/:${id}`}><Icon iconStyle={styles.timesIcon} icon={Icons.faTrash} /></Link>
            </div>}
        </Card>
    )

}

export default PublicationCard