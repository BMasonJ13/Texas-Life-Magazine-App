
//Firebase
import { db } from '../firebaseConfig'
import { doc, setDoc, deleteDoc } from 'firebase/firestore'

const setDocument = (fireStoreCollection, documentName, jsonObject, callback) =>
{
    setDoc(doc(db, fireStoreCollection, documentName), jsonObject).then(() => {
        callback();
    });
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
    deleteDocument
}