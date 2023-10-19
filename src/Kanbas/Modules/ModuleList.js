import db from "../Database";
import { useParams } from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css';

function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules.filter((module) => module.course === courseId);
  return (
    <div>
      <ul className="list-group">
        {modules.map((module, index) => (
          <li key={index} className="list-group-item list-group-item-secondary">
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
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ModuleList;
