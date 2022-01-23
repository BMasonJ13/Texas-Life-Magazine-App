
//Firebase
import { db } from '../firebaseConfig'
import { doc, collection, setDoc, getDoc, getDocs, deleteDoc, query, orderBy, limit} from 'firebase/firestore'

const setDocument = (fireStoreCollection, documentName, jsonObject, callback) =>
{
    setDoc(doc(db, fireStoreCollection, documentName), jsonObject).then(() => {
        callback();
    });
}

const getDocument = async (fireStoreCollection, documentName ) =>
{

    const snapshot = await getDoc(doc(db, fireStoreCollection, documentName))

    if(snapshot.exists())
        return snapshot.data();
    console.log("Could not get document. It may not exist.")
    return null;
}

const getRecentDocs = async (fireStoreCollection, amount) => {

    const q = query(collection(db, fireStoreCollection), orderBy("id"), limit(amount))
    
    const snapshot = await getDocs(q);

    if(snapshot)
        return snapshot.docs;
    
    console.log(`Could not recent data in ${fireStoreCollection}.`);
        return null;

}

const getDocuments = async (fireStoreCollection) => 
{
    return await getDocs(collection(db, fireStoreCollection))
}

const deleteDocument = async (collection, document, callback) =>
{
    await deleteDoc(doc(db, collection, document), () =>
    {
        callback();
    })
}



export {
    setDocument,
    getDocument,
    getDocuments,
    deleteDocument,
    getRecentDocs
}