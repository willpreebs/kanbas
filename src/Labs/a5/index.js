import EncodingParametersInURLs from './EncodingParametersInURLs.js';
import WorkingWithArrays from './WorkingWithArrays.js';
import WorkingWithObjects from './WorkingWithObjects.js';

function Assignment5() {
  return (
    <div>
      <h1>Assignment 5</h1>
      <div className="list-group">
        <a href="http://localhost:4000/a5/welcome"
           className="list-group-item">
          Welcome
        </a>
      </div>
      <EncodingParametersInURLs/>
      <WorkingWithObjects/>
      <WorkingWithArrays/>
    </div>
  );
}
export default Assignment5;