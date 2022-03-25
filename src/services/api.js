import axios from "axios";

const BASE_URL = "https://linkr-api-sql.herokuapp.com";

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

async function getUserPosts(token, userId) {
  const config = createConfig(token);
  return axios.get(`${BASE_URL}/user/${userId}`, config);
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
  getUserPosts,
  editPost
};

export default api;