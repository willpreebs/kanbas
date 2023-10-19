import ModuleList from "../Modules/ModuleList";
import StatusInfo from "./statusInfo";
import AboveModuleBar from "../Modules/aboveModuleBar";

import '../css/navigation.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
    <div className="page-col">
      <div className="d-flex flex-row-reverse p-2">
        <AboveModuleBar/>
      </div>
      <div className="row">
        <div className="col-10">
          <h2>Home</h2>
          <ModuleList />
        </div>
        <div className="col-2">
          <h2>Course Status</h2>
          <StatusInfo/>
        </div>
      </div>
    </div>
    
  );
}

export default Home;
