import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const gooleProvider = new GoogleAuthProvider();

  const [user, setUser] = useState(null);
  const auth = getAuth(app);

  const loginWithGoogle = () => {
    return signInWithPopup(auth, gooleProvider);
  };

  const userLogout = () => {
    return signOut(auth)
      .then(() => {
        setUser(null);
        console.log("Sign-out successful!", user);
      })
      .catch(() => {
        console.log("An error happened during signout");
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        console.log("User is signed in.", currentUser);
      }
    });

    return () => unsubscribe(); // unsubscribe on unmount to avoid memory leaks
  }, []);

  return (
    <>
      <AuthContext.Provider value={{ loginWithGoogle, user, userLogout }}>
        {children}
      </AuthContext.Provider>
    </>
  );
};

export default AuthProvider;
