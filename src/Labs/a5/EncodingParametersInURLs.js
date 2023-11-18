import React, { useEffect, useState } from "react";
import axios from "axios";

function EncodingParametersInURLs() {

  const HOST = process.env.REACT_APP_API_BASE || "http://localhost:4000";

  const getURL = (path) => {
    return `${HOST}/${path}`;
  };

    const [a, setA] = useState(34);
    const [b, setB] = useState(23);
    const [welcome, setWelcome] = useState("");
    const fetchWelcome = async () => {
        const response = await axios.get(getURL(`a5/welcome`));
        setWelcome(response.data);
    };
    const [result, setResult] = useState(0);
    const fetchSum = async (a, b) => {
      const response = await
        axios.get(getURL(`a5/add/${a}/${b}`));
      setResult(response.data);
    };
    const fetchSubtraction = async (a, b) => {
      const response = await axios.get(
        getURL(`a5/subtract/${a}/${b}`));
      setResult(response.data);
    };
  
    useEffect(() => {
      fetchWelcome();
    }, []);
  
    return (
        <div>
            <h3>Encoding Parameters In URLs</h3>
            <h4>Integrating React with APIs</h4>
            <h5>Fetching Welcome</h5>
            <h6>{welcome}</h6>
            <h4>Calculator</h4>
            <input onChange={(e) => setA(e.target.value)}
            className="form-control" type="number" value={a}/>
            <input onChange={(e) => setB(e.target.value)}
            className="form-control" type="number" value={b}/>

            <input value={result} className="form-control mb-2" type="number" readOnly/>
            <h3>Fetch Result</h3>
            <button onClick={() => fetchSum(a, b)}
                className="btn btn-primary mb-2  w-100" >
                Fetch Sum of {a} + {b}
            </button>
            <button onClick={() => fetchSubtraction(a, b)}
                className="btn btn-danger me-2 w-100" >
                Fetch Subtraction of {a} - {b}
            </button>

            <h3>Path Parameters</h3>
            <a href={getURL(`a5/add/${a}/${b}`)}
            className="btn btn-primary">
                Add {a} + {b}
            </a>
            <a href={getURL(`a5/subtract/${a}/${b}`)}
            className="btn btn-primary">
                Subtract {a} - {b}
            </a>
        </div>
    )
};
export default EncodingParametersInURLs;