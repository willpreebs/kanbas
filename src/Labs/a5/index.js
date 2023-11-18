import EncodingParametersInURLs from './EncodingParametersInURLs.js';
import WorkingWithArrays from './WorkingWithArrays.js';
import WorkingWithObjects from './WorkingWithObjects.js';

function Assignment5() {

  const HOST = process.env.BASE || "http://localhost:4000/";
  const WELCOME = `${HOST}/hello`;

  return (
    <div>
      <h1>Assignment 5</h1>
      <div className="list-group">
        <a href={WELCOME}
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