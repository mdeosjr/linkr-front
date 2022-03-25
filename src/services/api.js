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

async function getTimelinePosts(token) {
  const config = createConfig(token);
  return axios.get(`${BASE_URL}/timeline`, config);
}

async function deletePost(id,token){
  const config = createConfig(token);
  return axios.delete(`${BASE_URL}/post/${id}`,config);
}
async function editPost(postId, token, text) {
  const config = createConfig(token);
  return axios.put(`${BASE_URL}/post/${postId}`, {text}, config);
}

const api = {
  createUser,
  login,
  getTimelinePosts,
  deletePost,
  publishPost,
  editPost
};

export default api;