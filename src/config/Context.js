import React from "react";
import { auth } from './Firebase';
import { onAuthStateChanged, signInWithEmailAndPassword } from '@firebase/auth';
import { collection, addDoc, deleteDoc, doc } from '@firebase/firestore';
import { projectFireStore } from './Firebase';
import { Timestamp } from '@firebase/firestore';

const AppContext = React.createContext();

export const useAppContext = () => {
    return React.useContext(AppContext);
}

export const AppContextProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = React.useState(null)

    async function logIn(email, password){
        return signInWithEmailAndPassword(auth, email, password);
    }

    async function logout(){
        return auth.signOut();
    }

    async function order(location, companyName, email, name, PhoneNumber, additionalInfo){
        const collectionRef = collection(projectFireStore, 'orders');
        return addDoc(collectionRef, {
            location, 
            companyName, 
            email, 
            name, 
            PhoneNumber, 
            additionalInfo,
            timeStamp: Timestamp.now(),
        })
    }

    async function deleteOrder(id){
        await deleteDoc(doc(projectFireStore,'orders',id));
    }

    async function sendMessage(email, name, message){
        const collectionRef = collection(projectFireStore, 'messages');
        return addDoc(collectionRef, {
            email,
            name,
            message,
            timeStamp: Timestamp.now(),
        })
    }

    async function deleteMessage(id){
        await deleteDoc(doc(projectFireStore,'messages',id));
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
        logIn,
        logout,
        order,
        deleteOrder,
        sendMessage,
        deleteMessage,
        currentUser
    }

    return (
        <AppContext.Provider value={value} >
            {children}
        </AppContext.Provider>
    );
}