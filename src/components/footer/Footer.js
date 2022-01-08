import React from 'react';

//Subcomponents
import Icon from '../sub/icon/Icon'
import { Subtitle } from '../sub/text/Text'
import * as Icons from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';

//CSS Modules
import styles from './Footer.module.css'

//Resources
import TLMLogo from '../../res/TLMLogo.jpg'

const Footer = () =>
{
    return(
    <footer className={styles.footer}>
        <div className={styles.innerContainer}>
            <Link to="/"><img className={styles.logo} src={TLMLogo} alt='Texas Life Magazine Logo'/></Link>
            <div className={styles.socialMediaContainer}>
                <Icon color="black" iconStyle={styles.icon} icon={Icons.faFacebook} alt="facebook link" />
                <Icon color="black" iconStyle={styles.icon} icon={Icons.faInstagram} alt="instagram link" />
            </div>
            <Subtitle color="black" textStyle={styles.notice}>&copy; 2022 Texas Life Magazine</Subtitle>
        </div>
    </footer>
    )
}

export default Footer