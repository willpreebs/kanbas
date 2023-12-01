import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import { useState, useEffect } from "react";
import store from "./store";
import { Provider } from "react-redux";

import axios from "axios";
import Signin from "../users/signin";
import Account from "../users/account";
import UserTable from "../users/table";
import Signup from "../users/signup";

function Kanbas() {

  const LOCAL = false;

  const API_BASE = LOCAL ? "http://localhost:4000" : "https://kanbas-node-server-app-wp-10c31b2a54ba.herokuapp.com";
  const COURSE_URL = `${API_BASE}/api/courses`;
  const findAllCourses = async () => {
    const response = await axios.get(COURSE_URL);
    setCourses(response.data);
  };
  useEffect(() => {
    findAllCourses();
  }, []);

  const [courses, setCourses] = useState([]);
  const [course, setCourse] = useState({
    name: "New Course",
    number: "New Course Number",
    startDate: new Date(),
    endDate: new Date(),
  });
  const addCourse = async () => {
    const response = await axios.post(COURSE_URL, course);
    // console.log("adding a course");
    setCourses([
      response.data,
      ...courses,
    ]);
    setCourse({ name: "", number: "" });
  };
  const deleteCourse = async (course) => {
    // console.log("deleting a course");
    const response = await axios.delete(`${COURSE_URL}/${course._id}`);
    setCourses(courses.filter((c) => c._id !== course._id));
  };

  const updateCourse = async (course) => {
    console.log("updating a course: " + course._id);
    const response = await axios.put(`${COURSE_URL}/${course._id}`, course);
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        }
        return c;
      })
    );
    setCourse({ name: "", number: "" });
  };

  return (
    <Provider store={store}>
      <div className="d-flex">
        <KanbasNavigation />
        <div>
          <Routes>
            <Route path="Signin" element={<Signin/>}/>
            <Route path="Signup" element={<Signup/>}/>
            <Route path="Account"  element={<Account/>}/>
            <Route path="Account/:id" element={<Account/>}/>
            <Route
              path="Dashboard"
              element={
                <Dashboard
                  courses={courses}
                  setCourses={setCourses}
                  course={course}
                  setCourse={setCourse}
                  addCourse={addCourse}
                  deleteCourse={deleteCourse}
                  updateCourse={updateCourse}
                />
              }
            />
            <Route path="Courses" element={<h1>Courses</h1>}>

            </Route>
            <Route
              path="Courses/:courseId/*"
              element={<Courses courses={courses} />}
            />
            <Route path="Calendar" element={<h1>Calendar</h1>} />
            <Route path="admin/users" element={<UserTable/>} />
          </Routes>
        </div>
      </div>
    </Provider>
  );
}
export default Kanbas;
