import React, { useRef, useState } from "react";
import { submitData } from "./js/submitData";
import { check_validation } from "./js/validation";
import {
  locations,
  days,
  languages,
  initial_days,
  chosen_languages,
  flag,
} from "./js/initials";
import Loading from "../components/Loading";
import styles from "./css/ClientForm.module.css";

export default function ClientForm() {
  const [chosenLocation, setChosenLocation] = useState("");
  const [flags, setFlags] = useState(flag);

  const [loading, setLoading] = useState(false);

  const name = useRef();
  const email = useRef();
  const phone = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    let is_valid_data = check_validation(
      name.current.value,
      email.current.value,
      phone.current.value,
      initial_days,
      chosenLocation,
      chosen_languages,
      setFlags
    );
    if (!is_valid_data) {
      submitData(
        name.current.value,
        email.current.value,
        phone.current.value,
        initial_days,
        chosenLocation,
        chosen_languages,
        setLoading
      );
    } else {
      setLoading(false);
      alert("Wrong data");
    }
  };

  const handleLocationChange = (e) => {
    console.log(e.target.value);
    setChosenLocation(e.target.value);
  };

  const handleDaysChange = (e) => {
    initial_days[e.target.value] = e.target.checked;
  };
  const handleLanguageChange = (e) => {
    chosen_languages[e.target.value] = e.target.checked;
  };

  return (
    <>
      <div className="container my-10">
        <form onSubmit={submitHandler}>
          <div className="mb-3">
            <label htmlFor="nameInput" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="nameInput"
              aria-describedby="Name"
              ref={name}
            />
            {flags.name && (
              <div className={`form-text ${styles.nameHelp}`}>
                Please enter your name.
              </div>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Enter email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              ref={email}
            />
            {flags.email && (
              <div className={`form-text ${styles.nameHelp}`}>
                Please enter valid email.
              </div>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">
              Phone
            </label>
            <input
              type="text"
              className="form-control"
              id="phone"
              ref={phone}
            />
            {flags.phone && (
              <div className={`form-text ${styles.nameHelp}`}>
                This is not a valid phone number.
              </div>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="location" className="form-label">
              Choose your location
            </label>
            <select
              id="location"
              className="form-select"
              aria-label="Default select example"
              value={chosenLocation}
              onChange={handleLocationChange}
            >
              {locations.map((location) => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </select>

            {flags.location && (
              <div className={`form-text ${styles.nameHelp}`}>
                Choose your preffered location.
              </div>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="languages" className="form-label">
              Spoken languages
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
                      onChange={handleLanguageChange}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      {language}
                    </label>
                  </div>
                </div>
              ))}
            </div>
            {flags.languages && (
              <div className={`form-text ${styles.nameHelp}`}>
                Choose atleast one language.
              </div>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="availability" className="form-label">
              Which days you are available to take classes.
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
                      onChange={handleDaysChange}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      {day}
                    </label>
                  </div>
                </div>
              ))}
            </div>
            {flags.days && (
              <div className={`form-text ${styles.nameHelp}`}>
                Choose atleast one day.
              </div>
            )}
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
      {loading && <Loading />}
    </>
  );
}
