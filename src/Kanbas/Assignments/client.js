import axios from "axios";

const API_BASE = process.env.REACT_APP_API_BASE || "http://localhost:4000";
const COURSES_URL = `${API_BASE}/api/courses`;
const ASSIGNMENTS_URL = `${API_BASE}/api/assignments`;

export const deleteAssignment = async (assignmentId) => {
//   console.log(`${COURSES_URL}/${moduleId}`);
  const response = await axios
    .delete(`${ASSIGNMENTS_URL}/${assignmentId}`);
  return response.data;
};
export const findAssignmentsForCourse = async (courseId) => {
    // console.log(`${COURSES_URL}/${courseId}/modules`);
  const response = await axios
    .get(`${COURSES_URL}/${courseId}/assignments`);
  return response.data;
};
export const createAssignment = async (courseId, assignment) => {
    const response = await axios.post(
      `${COURSES_URL}/${courseId}/assignments`,
      assignment
    );
    return response.data;
};
export const updateAssignment = async (assignment) => {
    const response = await axios.
      put(`${ASSIGNMENTS_URL}/${assignment._id}`, assignment);
    return response.data;
};
  
