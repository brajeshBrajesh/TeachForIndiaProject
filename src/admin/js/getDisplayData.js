import { getDatabase, ref, child, get } from "firebase/database";

export const getDisplayData = (setLoading, setToDisplayData) => {
  const dbRef = ref(getDatabase());
  get(child(dbRef, "applications"))
    .then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
        let data_to_display = [];
        for (let key in snapshot.val()) {
          data_to_display.push(snapshot.val()[key].dataToSubmit);
        }
        console.log(data_to_display);
        setToDisplayData(data_to_display);
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
