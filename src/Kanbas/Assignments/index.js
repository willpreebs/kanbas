import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../Database";
import '../css/course.css';


function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId);
  return (
    <div>
      <div className="row">
        <div className="col">
          <div className="d-flex p-2">
            <div className="d-flex me-5">
              <input className="form-control" placeholder="Search for Assignment"/>
            </div>
            <div className= "d-flex ms-5">
                <button className="btn btn-secondary">+ Group</button>
                <button className="btn btn-danger">+ Assignment</button>
                <button className="btn btn-secondary"><i class="fa fa-ellipsis-vertical"></i></button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="col">
          <h2>Assignments for course {courseId}</h2>
          <ul className="list-group">
            {courseAssignments.map((assignment) => (
              <li className="list-group-item pt2 assignments-section">
                <Link
                  key={assignment._id}
                  to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                  className="list-group-item">
                  {assignment.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      
        
    </div>
  );
}
export default Assignments;