import axios from "axios";

const BASE_URL = "https://linkr-api-sql.herokuapp.com"; 
//const BASE_URL = "http://localhost:5000";

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

async function searchUsersByName(name) {
  return axios.get(`${BASE_URL}/users/search?name=${name}`);
}

async function getTrendingHashtags(token) {
  const config = createConfig(token);
  return axios.get(`${BASE_URL}/trendingHashtags`, config);
}

async function getPostByHashtag(token, hashtag){
  const config=createConfig(token);
  return axios.get(`${BASE_URL}/hashtag/${hashtag}`,config);
}

async function getLikesByPostId(token, postId, userId) {
  const config = createConfig(token);
  return axios.get(`${BASE_URL}/likes/${postId}?userId=${userId}`, config);
}

async function postLike(token, postId) {
  const config = createConfig(token);
  return axios.post(`${BASE_URL}/likes/${postId}`, {}, config);
}

async function deleteLike(token, postId) {
  const config = createConfig(token);
  return axios.delete(`${BASE_URL}/likes/${postId}`, config);
}

const api = {
  createUser,
  login,
  getTimelinePosts,
  deletePost,
  publishPost,
  getUserPosts,
  editPost,
  searchUsersByName,
  getTrendingHashtags,
  getLikesByPostId,
  postLike,
  deleteLike,
  getPostByHashtag,
  BASE_URL
};

export default api;
