import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules
} from "./modulesReducer";
// import { findModulesForCourse, createModule } from "./client";
import * as client from "./client.js";
import 'bootstrap/dist/css/bootstrap.min.css';

function ModuleList() {
  const { courseId } = useParams();

  const getModuleId = ((module) => {
    if (module._id.$oid) {
      return module._id.$oid;
    }
    else {
      return module._id;
    }
  });

  useEffect(() => {
    client.findModulesForCourse(courseId)
      .then((modules) =>
        dispatch(setModules(modules))
    );
  }, [courseId]);

  const handleAddModule = () => {
    client.createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };

  const handleDeleteModule = (moduleId) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };

  const handleUpdateModule = async () => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };

  const modules = useSelector((state) => {
    console.log(state.modulesReducer.modules);
 return state.modulesReducer.modules
});
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();

  return (
    <ul className="list-group">
      <li className="list-group-item">
        <div className="row">
          <div className="col">
            <button className="btn btn-success"
              onClick={handleAddModule}>
              Add
            </button>
            <button className="btn btn-warning me-2"
            onClick={handleUpdateModule}>
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
            <button className="btn btn-danger mt-2" 
            onClick={() => handleDeleteModule(getModuleId(module))}>
              Delete
            </button>
          </li>
        ))}
    </ul>
  );
}
export default ModuleList;
