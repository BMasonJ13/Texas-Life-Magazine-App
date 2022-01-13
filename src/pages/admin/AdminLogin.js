import React from 'react';
import axios from 'axios'

//Subcomponents
import { Header } from '../../components/sub/text/Text'

//CSS Modules
import styles from './AdminLogin.module.css'

const AdminLogin = ({setTheAdmin}) =>
{

    const handleClick = async () =>
    {
        const res = await axios.get('/api/Login')
        console.log(res);
    }

    return(
        <>
            <form className={styles.card}>
                <div className={styles.innerContainer}>
                    <input type="text" id="fname" placeholder='Email' name="fname" className={styles.input}/>
                    <input type="password" id="lname" placeholder='Password' name="lname" className={styles.input}/>
                    <button className={styles.button} onClick={handleClick}>Login</button>
                </div>
            </form>
            
        </>
    )

}

export default AdminLogin