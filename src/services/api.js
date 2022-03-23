import axios from "axios";

const BASE_URL = "http://localhost:4000";

 function createConfig(token) {
   return {
     headers: {
       Authorization: `Bearer ${token}`,
     },
   };
 }

async function createUser(user) {
  return await axios.post(`${BASE_URL}/users`, user);
}

async function login(data) {
  const token = await axios.post(`${BASE_URL}/login`, data);
  return token;
}

async function publishPost(data, token) {
  return axios.post(`${BASE_URL}/post`, data, createConfig(token));
}

const api = {
  createUser,
  login,
  publishPost
};

export default api;
