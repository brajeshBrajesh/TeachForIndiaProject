import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { getDisplayData } from "./js/getDisplayData";

import { days, languages } from "../client/js/initials";

import Loading from "../components/Loading";

export default function VolunteerDetails(props) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [toDisplayData, setToDisplayData] = useState([]);
  let show_button = false;
  if (toDisplayData.length >= 20) show_button = true;
  useEffect(() => {
    if (props.isAdmin === false) {
      navigate("/admin");
    }
    getDisplayData(setLoading, setToDisplayData);
  }, []);
  return (
    <>
      {loading && <Loading />}
      {!loading && (
        <div className="container my-4">
          <div className="text-center">
            <h2>Registered Volunteer Details({toDisplayData.length})</h2>
          </div>
          {toDisplayData.map((data) => (
            <div className="card my-2">
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
          ))}
          {show_button && (
            <div className="text-center">
              <Link to="/allocation" class="btn btn-primary my-4 ">
                Allocate volunteers to classrooms
              </Link>
            </div>
          )}
        </div>
      )}
    </>
  );
}
