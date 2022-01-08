
import React from 'react'
import { Link } from 'react-router-dom'

import styles from './Navbar.module.css'

import TLMLogo from '../../res/TLMLogo.jpg'

const Navbar = () =>
{

    return(
        <nav className={styles.navigation}>
            <Link className={styles.logoContainer} to="/">
                <img 
                className={styles.logo}
                src={TLMLogo} 
                alt="Texas Life Magazine Logo"/>
            </Link>
            <div className={styles.hamburger}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    )

}

export default Navbar