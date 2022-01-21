import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom'
import {auth} from '../../firebaseConfig'
import {signInWithEmailAndPassword} from 'firebase/auth'
import {useAuthState} from 'react-firebase-hooks/auth'

//CSS Modules
import styles from './AdminLogin.module.css'

const AdminLogin = ({setTheAdmin}) =>
{

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [user, loading, error] = useAuthState(auth)
    const history = useNavigate()

    useEffect(() => {
        if (loading) {
            console.log(error.message());
            return;
        }
        if (user) { setTheAdmin(true); history("/Home");}
    }, [user, loading, history, error, setTheAdmin]);

    const handleClick = () =>{
        signInWithEmailAndPassword(auth, email, password)
    }

    return(
        <>
            <form className={styles.card}>
                <div className={styles.innerContainer}>
                    <input type="text" id="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} name="fname" className={styles.input}/>
                    <input type="password" id="pass" onChange={(e) => setPassword(e.target.value)} placeholder='Password' name="lname" className={styles.input}/>
                    <button className={styles.button} onClick={handleClick}>Login</button>
                </div>
            </form>
            
        </>
    )

}

export default AdminLogin