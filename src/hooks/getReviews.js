import {useState, useEffect} from 'react'
import { projectFireStore } from '../firebase'
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { useAuth } from './../contexts/AuthContext';

const useReviews = (accepted) =>{
    const [docs, setDocs] = useState([]);

    const { currentUser } = useAuth()

    useEffect(()=>{
        let q;
        q = query(collection(projectFireStore, 'reviews'), where("accepted", "==", accepted));
        const unsub = onSnapshot(q, (snap)=>{
                let documents = [];
                snap.forEach(doc => {
                    documents.push({...doc.data(), id: doc.id})
                });
                setDocs(documents);
            })
        return () => unsub();
    }, [accepted, currentUser])

    return { docs };
}

export default useReviews;