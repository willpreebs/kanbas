import { Link, useParams, useLocation } from "react-router-dom";
import "../css/navigation.css"
import "../css/course.css";
import "../css/menu.css";

function CourseNavigation() {
  const links = ["Home", "Modules", "Assignments", "Grades"];
  const { courseId } = useParams();
  const { pathname } = useLocation();

  function getSelectedStatus(link) {
    if (pathname.includes(link)) {
      return "selected";
    }
    return "nonselected";
  }

  return (
    <div className="page-col menu">
      {links.map((link, index) => (
        <li className={`${getSelectedStatus(link)}`}>
          <Link
            key={index}
            to={`/Kanbas/Courses/${courseId}/${link}`}>
          {link}
          </Link>
        </li>
      ))}
    </div>
  );
} export default CourseNavigation;