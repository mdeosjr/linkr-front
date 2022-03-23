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

async function getTimelinePosts(token) {
  const config = createConfig(token);
  return axios.get(`${BASE_URL}/timeline`, config);
}

const api = {
  createUser,
  login,
  getTimelinePosts,
};

export default api;
