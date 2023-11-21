import axios from "axios";
const API_BASE = "https://kanbas-node-server-app-6h1f.onrender.com/"
const MODULES_URL = `${API_BASE}/api/modules`;
const COURSES_URL = `${API_BASE}/api/courses`;
export const deleteModule = async (moduleId) => {
  const response = await axios
    .delete(`${MODULES_URL}/${moduleId}`);
  return response.data;
};

export const findModulesForCourse = async (courseId) => {
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
  const response = 
  await axios.put(`${MODULES_URL}/${module._id}`, module);
  return response.data;
};

  