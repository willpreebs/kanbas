function AboveModuleBar () {

    return (
        <div className="d-flex flex-row-reverse p-2">
            <button className="btn btn-secondary"><i className="fa fa-ellipsis-vertical"></i></button>
            <button className="btn btn-danger">Module</button>
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="fa fa-circle-check"></i> Publish All
                </button>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Course 1</a></li>
                  <li><a className="dropdown-item" href="#">Course 2</a></li>
                </ul>
            </div>
            <button className="btn btn-secondary">View Progress</button>
            <button className="btn btn-secondary">Collapse All</button>
        </div>
    );
} export default AboveModuleBar;