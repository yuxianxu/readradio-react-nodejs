import axios from "axios";
import { isUserSignedIn, getUserAuthToken, removeUserSignedIn } from "../utils";

const API = axios.create({ baseURL: "http://localhost:5050" });
// const API = axios.create({ baseURL: "http://192.168.29.248:5000" });

API.interceptors.request.use((req) => {
    if (isUserSignedIn()) {
        req.headers.Authorization = `Bearer ${getUserAuthToken()}`;
    }
    return req;
});

// fetch latest posts
export const fetchLatestPosts = () =>
    API.get("/posts/latest")
        .then((res) => res.data)
        .catch((error) => {
            // if (error.response.data.code === 403) {
            //     removeUserSignedIn();
            // }
            return error.response.data;
        });

export const createNewPost = (postData) =>
    API.post("/posts", postData)
        .then((res) => res.data)
        .catch((error) => {
            return error.response;
        });

export const fetchPostById = (id) =>
    API.get("/posts/" + id)
        .then((res) => res.data)
        .catch((error) => {
            return error.response;
        });

export const fetchAllCategories = () =>
    API.get("/posts/categories")
        .then((res) => {
            return res.data;
        })
        .catch((error) => {
            return error.response;
        });

export const likePost = (id) =>
    API.post("/posts/like/" + id, {})
        .then((res) => res.data)
        .catch((error) => {
            return error.response;
        });

export const createNewComment = (comment) =>
    API.post("/comments", comment)
        .then((res) => res.data)
        .catch((error) => {
            return error.response;
        });

export const fetchRandomPosts = () =>
    API.get("/random")
        .then((res) => res.data)
        .catch((error) => {
            return error.response;
        });

export const fetchSearchResults = (data) =>
    API.post("/search", data)
        .then((res) => res.data)
        .catch((error) => {
            return error.response;
        });
