import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { getVolunteerData } from "./js/getVolunteerData";
import Loading from "../components/Loading";
import allocatingClassroomsWithVolunteers from "./js/allocatingClassroomsWithVolunteers";
export default function Allocation(props) {
  const [loading, setLoading] = useState(true);
  const [volunteerData, setVolunteerData] = useState([]);

  let to_render_data = [];

  const navigate = useNavigate();
  useEffect(() => {
    if (props.isAdmin === false) {
      navigate("/admin");
    }
    getVolunteerData(setLoading, setVolunteerData);
  }, []);
  if (loading === false) {
    allocatingClassroomsWithVolunteers(volunteerData, to_render_data);
    console.log(to_render_data);
  }

  return (
    <div className="container my-4">
      {loading && <Loading />}
      {!loading && (
        <div className="container my-5">
          <h2 className="text-center">Allocation of classrooms with candidates</h2>
          {to_render_data.map((data) => (
            <div className="card my-4" key={data.classroomID}>
              <h5 className="card-header">Classroom ID :{data.classroomID}</h5>
              <div className="card-body">
                <h5 className="card-title">Location:{data.location}</h5>
                <p className="card-text">
                  Number of requirements:{data.requirement}
                </p>
                <p className="card-text">Capacity : {data.capacity}</p>
                <div className="mb-3">
                  <label htmlFor="availability" className="form-label">
                    <b>Language requirements</b>
                  </label>
                  <div className="row">
                    {data.languageRequirement.map((language) => (
                      <div className="col-sm-4" key={language}>
                        <li class="list-group-item">{language}</li>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="availability" className="form-label">
                    <b> Subjects</b>
                  </label>
                  <div className="row">
                    {data.subjects.map((subject) => (
                      <div className="col-sm-4" key={subject}>
                        <li class="list-group-item">{subject}</li>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="availability" className="form-label">
                    <b>
                      {" "}
                      Matching Volunteers( Click on volunteer name to see full
                      details)
                    </b>
                  </label>
                  <div class="list-group">
                    <ul>
                      {data.suitable_volunteers.map((volunteer) => (
                        <li>
                          {" "}
                          <NavLink
                            to={volunteer.key}
                            style={{ textDecoration: "None" }}
                            key={volunteer.key}
                          >
                            {volunteer.name}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
