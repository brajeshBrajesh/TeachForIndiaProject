import React, { useEffect, useState } from "react";
import { useNavigate, useParams, NavLink } from "react-router-dom";
import { getDatabase, ref, child, get } from "firebase/database";
import { languages, days } from "../client/js/initials";
import Loading from "./Loading";
export default function SingleVolunteerDetail(props) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  const navigate = useNavigate();
  const { userId } = useParams();
  console.log(userId);
  useEffect(() => {
    if (props.isAdmin === false) {
      navigate("/admin");
    }
    const dbRef = ref(getDatabase());
    get(child(dbRef, "applications/" + userId))
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val().dataToSubmit);
          setData(snapshot.val().dataToSubmit);
          setLoading(false);
        } else {
          // console.log("No data available");
          setLoading(false);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <div className="Container my-6">
      {loading && (
        <div className="text-center">
          <Loading />
        </div>
      )}
      {!loading && (
        <div className="container my-5">
          <h2 className="text-center">Volunteer Details</h2>
          <div className="card my-4 ">
            <h5 className="card-header">{data.name}</h5>
            <div className="card-body">
              <h5 className="card-title">{data.email}</h5>
              <p className="card-text">{data.phone}</p>
              <p className="card-text">
                <b>Location </b>: {data.chosenLocation}
              </p>
              <div className="mb-3">
                <label htmlFor="availability" className="form-label">
                  <b>Chosen Languages</b>
                </label>
                <div className="row">
                  {languages.map((language) => (
                    <div className="col-4" key={language}>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value={language}
                          id="flexCheckDefault"
                          name={language}
                          defaultChecked={data.chosen_languages[language]}
                          disabled
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault"
                          style={{ opacity: 1 }}
                        >
                          {language}
                        </label>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="availability" className="form-label">
                  <b>Available Days</b>
                </label>
                <div className="row">
                  {days.map((day) => (
                    <div className="col-4" key={day}>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value={day}
                          id="flexCheckDefault"
                          name={day}
                          defaultChecked={data.chosenDays[day]}
                          disabled
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault"
                          style={{ opacity: 1 }}
                        >
                          {day}
                        </label>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <NavLink
            className="nav-link active"
            aria-current="page"
            to="/allocation"
          >
            Go back
          </NavLink>
        </div>
      )}
    </div>
  );
}
