import axios from "axios";
// import { AwardIcon } from "lucide-react";

const API_KEY = import.meta.env.VITE_STRAPI_API_KEY;

const axiosClient = await axios.create({
  baseURL: 'http://localhost:1337/api/',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${API_KEY}`
  }
});

export const CreateNewResume = async (data) => {
  try {
    const response = await axiosClient.post('user-resumes', data);
    return response.data;
  } catch (error) {
    console.error('Error creating new resume:', error);
    throw error; // Re-throw the error to handle it in the caller function
  }
};

// export default{ CreateNewResume};