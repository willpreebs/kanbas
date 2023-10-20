import db from "../Database";
import "../index.css";
import "../css/dashboard.css"
import { Link } from "react-router-dom";
function Dashboard() {
  const courses = db.courses;
  return (
    <div class="page-col dashboard">
      <h1>Dashboard</h1>
      <hr/>
      <h2>Published Courses ({courses.length})</h2>
      <div class="d-flex flex-wrap flex-row">
      {courses.map((course, index) => (
        <div class="card dashboard-card">
          <img class="card-img-top" src="https://img.freepik.com/free-vector/blank-book-white-background_1308-23052.jpg?w=996&t=st=1696294744~exp=1696295344~hmac=54d154afeef62ed9817c997bc56c6afb019aa8fabf237c3468ecd6aad3c77007" alt=""/>
          <div class="card-body">
            <Link
              key={index}
              to={`/Kanbas/Courses/${course._id}`}
              className="course-description">
              <b>{course.name}</b> <br/>
              {course.number}
            </Link>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
}

export default Dashboard;
