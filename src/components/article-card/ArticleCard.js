import React from 'react';

//Subcomponents
import Card from '../sub/card/Card';
import {Subtitle, Paragraph} from '../sub/text/Text'
import Button from '../sub/button/Button'
import {Link} from 'react-router-dom'
import Icon from '../sub/icon/Icon'
import * as Icons from '@fortawesome/free-solid-svg-icons'

//CSS Modules
import styles from './ArticleCard.module.css'

const ArticleCard = ({id, type, isAdmin, image, title, description, color, cardStyle}) =>
{

    return(
        <Card color={color} cardStyle={cardStyle}>
            <div className={styles.innerContainer}>
                <img className={styles.image} src={image} alt=""/>
                <Subtitle color={color} textStyle={styles.title}>{title}</Subtitle>
                <Paragraph color={color} textStyle={styles.description}>{description}</Paragraph>
                <Button color={color} buttonStyle={styles.action} path={`/View/${type}/${id}`}>View Article</Button>
            </div>
            {isAdmin && <div className={styles.adminContainer}>
                <Link className={styles.adminDelete} to={`/DeleteArticle/:${type}/:${id}`}><Icon iconStyle={styles.timesIcon} icon={Icons.faTrash} /></Link>
            </div>}
        </Card>
    )

}

export default ArticleCard