import {
  getAuth,
  GoogleAuthProvider,
  initializeAuth,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  getIdToken,
  updateEmail
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../components/Firebase/firebase.init";

initializeAuthentication();



const useFirebase = () => {
  //===== hooks =====
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  // ===== auth and provider =====
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  

  const signInUsingGoogle = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider)
      // .then((result) => {
      //   setUser(result.user);
      // })
      // .catch((error) => {
      //   console.log(`${error.code} : ${error.messages}`);
      // });
  };

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        getIdToken(user)
        .then(idToken=>localStorage.setItem('idToken',idToken))
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, []);

  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(`${errorCode} : ${errorMessage}`);
      });
  };

  return {
    signInUsingGoogle,
    user,
    setUser,
    logOut,
    isLoading,
    setIsLoading
  };
};

export default useFirebase;
