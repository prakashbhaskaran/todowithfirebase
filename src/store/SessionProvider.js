import React, { createContext, useState } from "react";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const SessionContext = createContext();
const SessionProvider = ({ children }) => {
  const [isAuthenticated, setAuthenticated] = useState(true);

  // const signup = () => {
  //   const auth = getAuth();
  //   createUserWithEmailAndPassword(auth, "p64@p64.in", "password")
  //     .then((userCredential) => {
  //       const user = userCredential.user;

  //       return setDoc(doc(db, "users", user.uid), {
  //         email: "p64@p64.in",
  //         password: "password",
  //       }).then(() => console.log("created"));
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //     });
  // };

  const logout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        window.location.href = "/login";
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };
  const login = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        window.location.href = "/";
      })
      .catch((error) => {
        if (error) setAuthenticated(false);
      });
  };
  const value = { login, logout, isAuthenticated };
  return (
    <SessionContext.Provider value={value}>{children}</SessionContext.Provider>
  );
};

export default SessionProvider;
