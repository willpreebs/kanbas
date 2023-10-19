import React from "react";
import db from "../Database";
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import "../css/course.css";
function AssignmentEditor() {
  const { assignmentId, courseId } = useParams();
  const assignment = db.assignments.find((a) => a._id === assignmentId);
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually save the assignment TBD");
    // go back to assignments
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div className="page-col">
      <h1>Edit {assignment.title}</h1>
      <div className="edit-assignment">
        <label className="form-label" for="assignment-name">Assignment Name</label>
        <input className="form-control mt-1" id="assignment-name" value="A1-ENV+HTML" />
        <textarea className="form-control mt-2">This assignment describes how to install the development environment</textarea>

        <div className="row g-3 align-items-center mt-2">
          <div className="col">
            <label for="inputPoints" className="col-form-label">Points</label>
          </div>
          <div className="col">
            <input type="number" id="inputPoints" className="form-control"/>
          </div>
        </div>
        <div className="row g-3 align-items-center mt-2">
          <div className="col align-items-right">
            <label for="assignment-group" className="col-form-label">Assignment Group</label>
          </div>
          <div className="col align-items-left">
            <select className="form-select" id="assignment-group">
              <option>ASSIGNMENTS</option>
            </select>
          </div>
        </div>
        <div className="row g-3 align-items-center mt-2">
          <div className="col">
            <label for="displayGrade" className="col-form-label">Display Grade as</label>
          </div>
          <div className="col">
            <select className="form-select" id="displayGrade">
              <option>Percentage</option>
            </select>
          </div>
        </div>
        <div className="row g-3 align-items-center mt-2">
          <div className="col">
          </div>
          <div className="col-auto">
            <input type="checkbox" id="final-grade" />
            <label for="final-grade">Do not count this assignment towards the final grade</label>
          </div>
        </div>
        <div className="row g-3 mt-2" />
        <div className="col">
          <label className="col-form-label">Submission Type</label>
        </div>
        <div className="col">
          <div className="form-control">
            <select className="form-select mb-2">
              <option>Online</option>
            </select>
            <b>Online Entry Options</b><br />
            <input className="mt-3" type="checkbox" id="text-entry" />
            <label for="text-entry">Text Entry</label>
            <br />
            <input className="mt-3" type="checkbox" id="url" />
            <label for="url">Website URL</label>
            <br />
            <input className="mt-3" type="checkbox" id="media" />
            <label for="media">Media Recordings</label>
            <br />
            <input className="mt-3" type="checkbox" id="annos" />
            <label for="annos">Student Annotations</label>
            <br />
            <input className="mt-3" type="checkbox" id="uploads" />
            <label for="uploads">File Uploads</label>
          </div>
        </div>
      </div>
      <div className="row g-3 mt-2">
        <div className="col">
          <label className="col-form-label">Assign</label>
        </div>
        <div className="col">
          <div className="form-control">
            <label for="assign"><b>Assign To</b></label>
            <input id="assign" className="form-control" value="Everyone" />
            <label for="due"><b>Due</b></label>
            <input type="text" className="form-control" id="due"/>
            <div className="row mt-2">
              <div className="col">
                <label for="available"><b>Available from</b></label>
              </div>
              <div className="col">
                <label for="until"><b>Until</b></label>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col">
                <input className="form-control" id="available" type="text"/>
              </div>
              <div className="col">
                <input className="form-control" type="text" />
              </div>
            </div>
            <button className="btn btn-secondary mt-2" style={{width: '100%'}}>+ Add</button>
          </div>
        </div>
      </div>
      <div className="row g-3 mt-2">
        <div className="col">
          <input className="mt-3" type="checkbox" id="notify" />
          <label for="notify">Notify users that this content has changed</label>
        </div>
        <div className="col">
          <div className="d-flex">
            <Link to={`/Kanbas/Courses/${courseId}/Assignments`}>
            <button className="btn btn-secondary">Cancel</button>
            </Link>
            <Link to={`/Kanbas/Courses/${courseId}/Assignments`}>
            <button onClick={handleSave} className="btn btn-danger">Save</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AssignmentEditor;
