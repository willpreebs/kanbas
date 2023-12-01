import { React} from "react"; 
import "../css/dashboard.css"
import "../../vendors/bootstrap/css/bootstrap.min.css";

import { Link } from "react-router-dom";

function Dashboard ({
  courses, course, setCourse, addCourse,
  deleteCourse, updateCourse
}) {
  return (
    <div className="page-col dashboard">
      <h1>Dashboard</h1>
      <hr/>
      <div className="form-control">
        <input placeholder="Course name" value={course.name} className="form-control"
              onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
        <input placeholder="Course number" value={course.number} className="form-control"
              onChange={(e) => setCourse({ ...course, number: e.target.value }) } />
        <input title="Start date" value={course.startDate} className="form-control" type="date"
              onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
        <input title="End date" placeholder="End date" value={course.endDate} className="form-control" type="date"
              onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />
        <button onClick={addCourse} className="btn btn-success me-2">
          Add
        </button>
        <button onClick={() => updateCourse(course)} className="btn btn-warning" >
          Update
        </button>
      </div>
      <hr/>
      <h2>Published Courses ({courses.length})</h2>
      <div className="d-flex flex-wrap flex-row">
      {courses.map((course, index) => (
        <div key={index} className="card dashboard-card">
          <img className="card-img-top" src="https://img.freepik.com/free-vector/blank-book-white-background_1308-23052.jpg?w=996&t=st=1696294744~exp=1696295344~hmac=54d154afeef62ed9817c997bc56c6afb019aa8fabf237c3468ecd6aad3c77007" alt=""/>
          <div className="card-body">
            <Link
              key={index}
              to={`/Kanbas/Courses/${course.number}`}
              className="course-description">
            <b>{course.name}</b> <br/>
              {course.number} <br/>
            <button className="btn btn-warning me-2"
              onClick={(event) => {
                event.preventDefault();
                setCourse(course);
              }}>
              Edit
            </button>
            <button className="btn btn-danger"
              onClick={(event) => {
                event.preventDefault();
                deleteCourse(course);
              }}>
              Delete
            </button>
            </Link>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
}

export default Dashboard;
