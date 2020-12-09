import { useState, useEffect } from 'react'
import { firebaseStorage, firebaseFirestore } from '../firebase/config'

export default function useStorage(file) {
    const [progress, setProgress] = useState(0)
    const [error, setError] = useState(null)
    const [url, setUrl] = useState(null)

    useEffect(() => {
        // References
        const storageRef = firebaseStorage.ref(file.name)
        const collectionRef = firebaseFirestore.collection('images')

        storageRef.put(file).on('state_changed', (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100
            setProgress(percentage)
        }, (error) => {
            setError(error)
        }, async () => {
                const url = await storageRef.getDownloadURL();
                collectionRef.add({url})
                setUrl(url)
            })
    }, [file])

    return { progress , url, error }

}   