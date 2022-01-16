
//Firebase
import { storage } from "../firebaseConfig"
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage'

const sendData = (fileFirebasePath, file, callback) => {
    
    const fileRef = ref(storage, fileFirebasePath);

    uploadBytes(fileRef, file).then((snapshot) => {
        getDownloadURL(fileRef).then((url) => {
            callback(url);
        })
    })
}

const deleteData = (fileFirebasePath, callback) =>
{
    deleteObject(ref(storage, fileFirebasePath)).then(() =>{
        callback();
    });
}

export{
    sendData,
    deleteData
}