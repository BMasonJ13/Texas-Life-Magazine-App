import React from 'react'

//Subcomponents
import Card from '../sub/card/Card'

//CSS Module
import styles from './PopUp.module.css'

const ModPopUp = ({ loading, children }) => {

    return (
        <div className={`${styles.background}${loading ? " " + styles.show : ""}`}>
            <div className={styles.innerContainer}>
                <Card color="white" cardStyle={styles.card}>
                    <div className={styles.cardInnerContainer}>
                        {children}
                    </div>
                </Card>
            </div>
        </div>
    )

}

export default ModPopUp