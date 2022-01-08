import React from 'react';

import styles from './Footer.module.css'
import textStyles from '../../shared-styles/TextStyles.module.css'
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Icons from '@fortawesome/free-brands-svg-icons'

import TLMLogo from '../../res/TLMLogo.jpg'

const Footer = () =>
{
    return(
    <footer className={styles.footer}>
        <div className={styles.innerContainer}>
            <Link to="/"><img className={styles.logo} src={TLMLogo} alt='Texas Life Magazine Logo'/></Link>
            <div className={styles.socialMediaContainer}>
                <FontAwesomeIcon className={styles.icon} icon={Icons.faFacebook} alt="facebook link" />
                <FontAwesomeIcon className={styles.icon} icon={Icons.faInstagram} alt="facebook link" />
            </div>
            <h2 className={textStyles.whiteSubtitle + " " + styles.notice}>&copy; 2022 Texas Life Magazine</h2>
        </div>
    </footer>
    )
}

export default Footer