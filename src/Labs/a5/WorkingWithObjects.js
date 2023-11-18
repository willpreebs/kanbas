import React, { useState, useEffect } from "react";
import axios from 'axios';

function WorkingWithObjects() {

    const [assignment, setAssignment] = useState({
        id: 1,
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10",
        completed: false,
        score: 0,
    });
    const URL_BASE = process.env.BASE || "http://localhost:4000";
    const URL = `${URL_BASE}/a5/assignment`;
    
    const fetchAssignment = async () => {
        const response = await axios.get(`${URL}`);
        setAssignment(response.data);
    };
    const updateTitle = async () => {
        const response = await axios
        .get(`${URL}/title/${assignment.title}`);
        setAssignment(response.data);
    };
    useEffect(() => {
        fetchAssignment();
    }, []);

    return (
        <div>
        <h2>Working With Objects</h2>
        <h3>Modifying Properties</h3>
        <input onChange={(e) => setAssignment({
                ...assignment, title: e.target.value })}
            value={assignment.title}
            className="form-control mb-2" type="text" />
        <button onClick={updateTitle}
                className="w-100 btn btn-primary mb-2">
            Update Title to: {assignment.title}
        </button>
        <button onClick={fetchAssignment}
                className="w-100 btn btn-danger mb-2">
            Fetch Assignment
        </button>
        </div>
    );
}
export default WorkingWithObjects;
