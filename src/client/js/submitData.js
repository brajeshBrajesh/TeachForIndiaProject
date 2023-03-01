import { getDatabase, ref, push, set } from "firebase/database";
import app from "../../firebase/Firebase";

export const submitData = (
  name,
  email,
  phone,
  initial_days,
  chosenLocation,
  chosen_languages,
  setLoading
) => {
  // alert("SUbmitdadfyas");

  const dataToSubmit = {
    name: name,
    email: email,
    phone: phone,
    chosenLocation: chosenLocation,
    chosen_languages: chosen_languages,
    chosenDays: initial_days,
  };
  const db = getDatabase();
  const postListRef = ref(db, "applications");
  const newPostRef = push(postListRef);
  set(newPostRef, {
    dataToSubmit,
  }).then(() => {
    alert("Data submitted successfully");
    window.location.reload(false);
  });

  console.log(dataToSubmit);
};
