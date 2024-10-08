import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  GoogleAuthProvider,
  GithubAuthProvider,
  onAuthStateChanged,
  setPersistence,
  browserLocalPersistence,
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
  const [loading, setLoading] = useState(true); // Keep track of loading state

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const createUser = async (displayName, email, password, photoURL) => {
    setLoading(true);
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      // After the user is created, update the profile with displayName and photoURL
      await updateProfile(auth.currentUser, {
        displayName: displayName,
        photoURL: photoURL,
      });
      // Reload the currentUser to get the updated profile data
      await auth.currentUser.reload();
      // Update the user state with the new information
      setUser(auth.currentUser);
    } catch (error) {
      console.error("Error creating user:", error);
    } finally {
      setLoading(false);
    }
  };

  const loginWithEmail = async (email, password) => {
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setUser(auth.currentUser);
    } catch (error) {
      console.error("Error logging in with email:", error);
    } finally {
      setLoading(false);
    }
  };

  const loginWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const loginWithGithub = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider)
      .then((result) => {
        setUser(result.user);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const userLogout = async () => {
    setLoading(true);
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Error logging out:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setPersistence(auth, browserLocalPersistence)
      .then(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser);
          setLoading(false);
        });
        return () => unsubscribe();
      })
      .catch((error) => {
        console.error("Error setting persistence:", error);
        setLoading(false);
      });
  }, []);

  const authInfo = {
    createUser,
    loginWithEmail,
    loginWithGoogle,
    loginWithGithub,
    user,
    userLogout,
    loading, // Pass loading state to the context
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
