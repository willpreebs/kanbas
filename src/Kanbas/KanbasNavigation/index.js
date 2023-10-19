import { Link, useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../vendors/fontawesome-6/css/all.css';
import '../css/navigation.css';

function KanbasNavigation() {
  const links = ["Account", "Dashboard", "Courses", "Calendar"]; //, "Inbox", "History", "Studio", "Commens", "Help"];
  const icons = ["fa-user", "fa-gauge-high", "fa-book", "fa-calendar"]
  const { pathname } = useLocation();

  function getLinkClassName(link) {
    if (pathname.includes(link)) {
      return "active-link";
    }
    else {
      return "inactive-link";
    }
  }

  const getIconColor = (link) => {
    if (link === "Account") {
      if (getLinkClassName(link) === "active-link") {
        return 'black'
      }
      else {
        return 'white';
      }
    }
    else {
      return 'red';
    }
  }

  return (
    <div className="kanbas-navigator page-col"/* style={{ width: 150 }}*/>
      <li className="kanbas-navigator inactive-link">
      <Link to="/Kanbas"
            className="inactive-link">
            <i className="fa fa-n fa-4x" style={{color: 'red'}}></i>
      </Link>
      </li>
      {links.map((link, index) => (
        <li className={`kanbas-navigator ${getLinkClassName(link)}`}>
          <Link
            key={index}
            to={`/Kanbas/${link}`}
            className={`${getLinkClassName(link)}`}>
            <i className={`fa ${icons[index]} fa-2x`} style={{color: `${getIconColor(link)}`}}></i>
            {link}
          </Link>
        </li>
      ))}
    </div>
  );
}
export default KanbasNavigation;
