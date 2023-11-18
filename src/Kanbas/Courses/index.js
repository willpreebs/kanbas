import { useParams } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";

import CourseNavigation from "../CourseNavigation";
import { Routes, Route, useLocation} from "react-router-dom";
import Modules from "../Modules";
import Home from "../Home";
import Assignments from "../Assignments";
import AssignmentEditor from "../Assignments/AssignmentEditor";

import "../css/navigation.css"
import "../css/course.css";
import "../css/menu.css";

function Courses() {
  const { courseId } = useParams();
  console.log("courseID: " + courseId);
  const URL = "http://localhost:4000/api/courses";
  const [course, setCourse] = useState({
    name: "New Course",
  });
  const findCourseById = async (courseId) => {
    console.log(`${URL}/${courseId}`);
    const response = await axios.get(
      `${URL}/${courseId}`
    );
    setCourse(response.data);
  };

  useEffect(() => {
    console.log("useEffect: " + courseId.toString());
    findCourseById(courseId);
  }, [courseId]);

  const links = ["Home", "Modules", "Assignments", "Grades"];
  const { pathname } = useLocation();

  function getLinkName() {
    for (let i = 0; i < links.length; i++) {
      if (pathname.includes(links[i])) {
        return links[i];
      }
    }
  }
  return (
    <div>
      <div className="d-flex p-2">
        <nav aria-label="breadcrumb" className="breadcrumbDivider">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <a href="#">{course.name}</a> 
              </li>
              <li class="breadcrumb-item active" aria-current="page">{getLinkName()}</li>
            </ol>
        </nav>
      </div>
      <h1 className="ps-3">{course.name}</h1>
      <hr/>
      <div className="row">
        <CourseNavigation />
        <div className="col">
          <Routes>
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route
              path="Assignments/:assignmentId"
              element={<AssignmentEditor />}
            />
            <Route path="Grades" element={<h1>Grades</h1>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Courses;
