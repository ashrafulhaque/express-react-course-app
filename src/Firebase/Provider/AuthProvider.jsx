import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  GoogleAuthProvider,
  GithubAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  createUserWithEmailAndPassword,
  updateProfile,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";

import app from "../firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const gooleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const createUser = async (displayName, email, password, photoURL) => {
    setLoading(true);
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      // After the user is created, update the profile with displayName and photoURL
      console.log("updating profile...", displayName, photoURL);
      await updateProfile(auth.currentUser, {
        displayName: displayName,
        photoURL: photoURL,
      });
      // Reload the currentUser to get the updated profile data
      await auth.currentUser.reload();
      // Update the user state with the new information
      setUser(auth.currentUser);
      setLoading(false);
    } catch (error) {}
  };

  const loginWithEmail = async (email, password) => {
    setLoading(true);
    await signInWithEmailAndPassword(auth, email, password);
    // Update the user state with the new information
    setUser(auth.currentUser);
    console.log("photoURL: ", auth.currentUser.photoURL);
    setLoading(false);
  };

  const loginWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, gooleProvider);
  };

  const loginWithGithub = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };

  const userLogout = async () => {
    setLoading(true);
    try {
      await signOut(auth);
      setUser(null);
      console.log("Sign-out successful!", user);
    } catch {
      console.log("An error happened during signout");
    }
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        console.log("User is signed in.", currentUser);
        setLoading(false);
      }
    });

    return () => unsubscribe(); // unsubscribe on unmount to avoid memory leaks
  }, []);

  const authInfo = {
    createUser,
    loginWithEmail,
    loginWithGoogle,
    loginWithGithub,
    user,
    userLogout,
  };

  return (
    <>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </>
  );
};

export default AuthProvider;
