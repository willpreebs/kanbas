import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";

import 'bootstrap/dist/css/bootstrap.min.css';

function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();

  return (
    <ul className="list-group">
      <li className="list-group-item">
        <div className="row">
          <div className="col">
            <button className="btn btn-success"
              onClick={() => dispatch(addModule({ ...module, course: courseId }))}>
              Add
            </button>
            <button className="btn btn-warning me-2"
            onClick={() => dispatch(updateModule(module))}>
              Update
            </button>
          </div>
          
        </div>
        <div className="row">
          <div className="col col-md-auto">
            <label className="form-label mb-4">
            Name:
              <input className="form-control"
              value={module.name}
              onChange={(e) =>
                dispatch(setModule({ ...module, name: e.target.value }))
              }/>
            </label>
          </div>
          <div className="col col-md-auto">
            <label className="form-label">
            Description:
              <textarea className="form-control"
                value={module.description}
                onChange={(e) =>
                  dispatch(setModule({ ...module, description: e.target.value }))
                }
              />
            </label>
          </div>
        </div>
        
      </li>
      {modules
        .filter((module) => module.course === courseId)
        .map((module, index) => (
          <li key={index} className="list-group-item list-group-item-secondary">
            <br/>
            <b>{module.name}</b> <br/>
            {module.description}
            {module.lessons && module.lessons.length > 0 && (
              <ul className="list-group mt-1">
                {module.lessons.map((lesson, index) => (
                  <li key={index} className="list-group-item pt-2">
                    {lesson.name}
                  </li>
                ))}
              </ul>
            )}
            <br/>
            <button className="btn btn-warning mt-2" onClick={() => dispatch(setModule(module))}>
              Edit
            </button>
            <button className="btn btn-danger mt-2" onClick={() => dispatch(deleteModule(module._id))}>
              Delete
            </button>
          </li>
        ))}
    </ul>
  );
}
export default ModuleList;
