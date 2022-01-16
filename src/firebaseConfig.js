
import {initializeApp} from 'firebase/app'
import { getAuth, setPersistence, browserLocalPersistence} from 'firebase/auth';
import {getStorage} from 'firebase/storage'
import {getFirestore} from 'firebase/firestore'

const app = initializeApp({
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
});

const auth = getAuth(app);
setPersistence(auth, browserLocalPersistence)

const storage = getStorage(app)
const db = getFirestore(app)


export {
    app,
    auth,
    storage,
    db
}