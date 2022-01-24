import React from 'react'

//Subcomponents
import {Header, Paragraph} from '../sub/text/Text'

//CSS modules
import styles from './Element.module.css'

const Element = ({ header, image1, para1, image2, para2, image3, para3, image4, para4, image5, para5, image6, para6, image7, para7, image8, para8, image9, para9, image10, para10, image11, para11, image12, para12 }) =>
{
    const IsAdmin = () => {
            return(
                <div className={styles.container}>
                    <Header textStyle={styles.header}>{header}</Header>
                    <div className={styles.section}>
                        {image1 && <img className={styles.image} src={image1} alt=""></img> }
                        <Paragraph textStyle={styles.para}> {para1}</Paragraph>
                    </div>
                    <div className={styles.section}>
                        {image2 && <img className={styles.image} src={image2} alt=""></img>}
                        <Paragraph textStyle={styles.para}> {para2}</Paragraph>
                    </div>
                    <div className={styles.section}>
                        {image3 && <img className={styles.image} src={image3} alt=""></img>}
                        <Paragraph textStyle={styles.para}> {para3}</Paragraph>
                    </div>
                    <div className={styles.section}>
                        {image4 && <img className={styles.image} src={image4} alt=""></img>}
                        <Paragraph textStyle={styles.para}> {para4}</Paragraph>
                    </div>
                    <div className={styles.section}>
                        {image5 && <img className={styles.image} src={image5} alt=""></img>}
                        <Paragraph textStyle={styles.para}> {para5}</Paragraph>
                    </div>
                    <div className={styles.section}>
                        {image6 && <img className={styles.image} src={image6} alt=""></img>}
                        <Paragraph textStyle={styles.para}> {para6}</Paragraph>
                    </div>
                    <div className={styles.section}>
                        {image7 && <img className={styles.image} src={image7} alt=""></img>}
                        <Paragraph textStyle={styles.para}> {para7}</Paragraph>
                    </div>
                    <div className={styles.section}>
                        {image8 && <img className={styles.image} src={image8} alt=""></img>}
                        <Paragraph textStyle={styles.para}> {para8}</Paragraph>
                    </div>
                    <div className={styles.section}>
                        {image9 && <img className={styles.image} src={image9} alt=""></img>}
                        <Paragraph textStyle={styles.para}> {para9}</Paragraph>
                    </div>
                    <div className={styles.section}>
                        {image10 && <img className={styles.image} src={image10} alt=""></img>}
                        <Paragraph textStyle={styles.para}> {para10}</Paragraph>
                    </div>
                    <div className={styles.section}>
                        {image11 && <img className={styles.image} src={image11} alt=""></img>}
                        <Paragraph textStyle={styles.para}> {para11}</Paragraph>
                    </div>
                    <div className={styles.section}>
                        {image12 && <img className={styles.image} src={image12} alt=""></img> }
                        <Paragraph textStyle={styles.para}> {para12}</Paragraph>
                    </div>
                </div>
            )
    }

    return IsAdmin()
}

export default Element;