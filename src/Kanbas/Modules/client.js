import axios from "axios";

const API_BASE = process.env.REACT_APP_API_BASE || "http://localhost:4000";
const MODULES_URL = `${API_BASE}/api/modules`;
const COURSES_URL = `${API_BASE}/api/courses`;

export const deleteModule = async (moduleId) => {
  console.log(`${MODULES_URL}/${moduleId}`);
  const response = await axios
    .delete(`${MODULES_URL}/${moduleId}`);
  return response.data;
};
export const findModulesForCourse = async (courseId) => {
    console.log(`${COURSES_URL}/${courseId}/modules`);
  const response = await axios
    .get(`${COURSES_URL}/${courseId}/modules`);
  return response.data;
};
export const createModule = async (courseId, module) => {
    const response = await axios.post(
      `${COURSES_URL}/${courseId}/modules`,
      module
    );
    return response.data;
};
export const updateModule = async (module) => {
    const response = await axios.
      put(`${MODULES_URL}/${module._id}`, module);
    return response.data;
};
  
