import React from "react";
import { auth } from '../firebase';
import { 
    createUserWithEmailAndPassword, 
    onAuthStateChanged, 
    signInWithEmailAndPassword, 
    sendPasswordResetEmail, 
    updatePassword, 
    updateEmail 
} from '@firebase/auth';
import { collection, addDoc, deleteDoc, doc, getDoc, setDoc } from '@firebase/firestore';
import { projectFireStore, projectStorage } from '../firebase';
import { Timestamp } from '@firebase/firestore';

const AppContext = React.createContext();

export const useAppContext = () => {
    return React.useContext(AppContext);
}

export const AppContextProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = React.useState(null)

    async function signUp(email, password){
        await createUserWithEmailAndPassword(auth, email, password);
        await setDoc(doc(projectFireStore, 'users', auth.currentUser.uid), {
            email: auth.currentUser.email,
            username: auth.currentUser.email.split('@')[0]
        })
    }

    async function signIn(email, password){
        return signInWithEmailAndPassword(auth, email, password);
    }

    function logout(){
        return auth.signOut();
    }

    // function postContent(posterId, content){
    //     const collectionRef = collection(projectFireStore, 'posts');
    //     return addDoc(collectionRef, {posterId: posterId, content: content, timeStamp: Timestamp.now(), likes: [], comments: []})
    // }

    function deleteComment(id){
        return deleteDoc(doc(projectFireStore,'comments',id));
    }
    
    React.useEffect(()=>{
        const unsub = onAuthStateChanged(auth, (currentUser)=>{
            if(currentUser){
                return setCurrentUser(currentUser);
            }
            else{
                setCurrentUser(null)
            }
        })
        return unsub;
    }, [])

    const value = {
        signUp,
        signIn,
        logout,
        deleteComment,
        currentUser
    }

    return (
        <AppContext.Provider value={value} >
            {children}
        </AppContext.Provider>
    );
}