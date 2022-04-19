import axios from "axios";

const getHeaders = () => {
  var token = localStorage.getItem("auth_token");
  if (token) {
    var headers = {
      Authorization: `Token ${token}`,
    };
  } else {
    headers = {};
  }
  return headers;
};

const getInstance = ({ useHeader = true }) => {
  const apiUrl = process.env.REACT_APP_API_URL;
  return axios.create({
    baseURL: apiUrl,
    headers: useHeader ? getHeaders() : null,
  });
};

const put = async (url, data) => {
  return await getInstance().put(url, data);
};

const patch = async (url, data) => {
  return await getInstance().patch(url, data);
};

const remove = async (url, data) => {
  return await getInstance().delete(url, data);
};

const get = async (url, params) => {
  return await getInstance({}).get(url, params);
};

const post = async (url, data) => {
  return await getInstance({}).post(url, data);
};

const Api = {
  get: get,
  post: post,
  put: put,
  patch: patch,
  remove: remove,
};

export default Api;
