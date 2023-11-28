import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./index.css";
import {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  setAssignment,
  setAssignments
} from "./assignmentsReducer";
import * as client from "./client.js";


function Assignments() {
  const { courseId } = useParams();

  const getAssignmentId = ((assignment) => {
    if (assignment._id.$oid) {
      return assignment._id.$oid;
    }
    else {
      return assignment._id;
    }
  });

  useEffect(() => {
    client.findAssignmentsForCourse(courseId)
      .then((assignments) => dispatch(setAssignments(assignments))
    );
  }, [courseId]);

  const handleAddAssignment = () => {
    client.createAssignment(courseId, assignment).then((assignment) => {
      dispatch(addAssignment(assignment));
    });
  };

  const handleDeleteAssignment = (assignmentId) => {
    client.deleteAssignment(assignmentId).then((status) => {
      dispatch(deleteAssignment(assignmentId));
    });
  };

  const handleUpdateAssignment = async () => {
    const status = await client.updateAssignment(assignment);
    dispatch(updateAssignment(assignment));
  };

  const assignments = useSelector((state) => {
    console.log(state.assignmentsReducer.assignments);
    // state.assignmentsReducer.assignments
  });
  const assignment = useSelector((state) => state.assignmentsReducer.assignment);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Assignments for course {courseId}</h2>
      <ul className="list-group">
        <li className="list-group-item">
          <div className="row">
            <div className="col">
              <button className="btn btn-success"
                onClick={handleAddAssignment}>
                Add
              </button>
              <button className="btn btn-warning me-2"
              onClick={handleUpdateAssignment}>
                Update
              </button>
            </div>
          </div>
          <div className="row">
          <div className="col col-md-auto">
            <label className="form-label mb-4">
            Title:
              <input className="form-control"
              value={assignment.title}
              onChange={(e) =>
                dispatch(setAssignment({ ...assignment, title: e.target.value }))
              }/>
            </label>
          </div>
        </div>
        </li>
      <div className="list-group">
        {assignments.map((assignment) => (
          <Link
            key={assignment._id}
            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
            className="list-group-item">
            {assignment.title}
          </Link>
        ))}
      </div>
      </ul>
    </div>
  );
}
export default Assignments;
