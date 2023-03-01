import { getDatabase, ref, child, get } from "firebase/database";

export const getVolunteerData = (setLoading, setVolunteerData) => {
  const dbRef = ref(getDatabase());
  get(child(dbRef, "applications"))
    .then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
        let data_to_display = [];
        for (let key in snapshot.val()) {
          let temp = { ...snapshot.val()[key], key: key };
          data_to_display.push(temp);
        }
        console.log(data_to_display);
        setVolunteerData(data_to_display);
        setLoading(false);
      } else {
        // console.log("No data available");
        setLoading(false);
      }
    })
    .catch((error) => {
      console.error(error);
    });
};
