import React from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
export const submitAdminData = (email, password, setIsAdmin) => {
  console.log("SUBMITADMINDATA");
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      setIsAdmin(true);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setIsAdmin(false);
      alert("Email or Password is wrong.");
    });
};
