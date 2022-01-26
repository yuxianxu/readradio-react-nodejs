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
export const fetchUserbyId = (id) =>
    API.get("/user/" + id)
        .then((res) => res.data)
        .catch((error) => {
            // if (error.response.data.code === 403) {
            //     removeUserSignedIn();
            // }
            return error.response.data;
        });
