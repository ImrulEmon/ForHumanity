import { getAuth, GoogleAuthProvider,initializeAuth,signInWithPopup,signOut } from "firebase/auth";
import { useState } from 'react'
import initializeAuthentication from "../components/Firebase/firebase.init";

initializeAuthentication();

const useFirebase=()=>{

    //===== hooks =====
    const [user,setUser]= useState({});

    // ===== auth and provider =====
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const signInUsingGoogle=()=>{
        signInWithPopup(auth,googleProvider)
        .then(result=>{
            setUser(result.user);
        }).catch(error=>{
            console.log(`${error.code} : ${error.messages}`)
        })
    }

    const logOut=()=>{
        signOut(auth).then(() => {
            setUser({});
          }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(`${errorCode} : ${errorMessage}`)
          });
    }

    return{
        signInUsingGoogle,
        user,
        setUser,
        logOut
    }

}

export default useFirebase;