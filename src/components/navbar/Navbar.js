
import React, { useState } from 'react'

//Components
import { Link } from 'react-router-dom'

//CSS Modules
import styles from './Navbar.module.css'

//Resources
import TLMLogo from '../../res/TLMLogo.jpg'

const Navbar = () =>
{

    const [isActive, setActive] = useState(false);

    const handleToggle = () => {
        setActive(!isActive);
    }

    const closeDrawer = () => {
        setActive(false);
    }

    return(
        <nav className={styles.navigation}>
            <Link className={styles.logoContainer} to="/">
                <img 
                className={styles.logo}
                src={TLMLogo} 
                alt="Texas Life Magazine Logo"/>
            </Link>
            <div className={isActive ? styles.hamburger + " " + styles.isActive : styles.hamburger} onClick={handleToggle}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className={ isActive ? styles.isActiveNav : styles.navItemContainer}>
                <div className={styles.innerContainer}>
                    <Link onClick={closeDrawer} className={styles.navItem + " " + styles.first} to="/Home">Home</Link>
                    <Link onClick={closeDrawer} className={styles.navItem} to="/Music">Music</Link>
                    <Link onClick={closeDrawer} className={styles.navItem} to="/Tastes">Tastes</Link>
                    <Link onClick={closeDrawer} className={styles.navItem} to="/Travels">Travels</Link>
                    <Link onClick={closeDrawer} className={styles.navItem + " " + styles.blueLink} to="/BackTheBlue">Back the Blue</Link>
                    {/* <Link onClick={closeDrawer} className={styles.navItem} to="/CreationEvidenceMuseum">Creation Evidence Museum</Link> */}
                    <Link onClick={closeDrawer} className={styles.navItem} to="/SomervellCounty">Somervell County</Link>
                    {/* <Link onClick={closeDrawer} className={styles.navItem} to="/Archives">Archives</Link>
                    <Link onClick={closeDrawer} className={styles.navItem} to="/Podcasts">Podcasts</Link> */}
                    <Link onClick={closeDrawer} className={styles.navItem} to="/Sponsors">Sponsors</Link>
                </div>
            </div>
        </nav>
    )

}

export default Navbar