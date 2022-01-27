import * as api from "../api/post";
import * as actions from "../redux/actions/postActions";

import Collapse from "@material-ui/core/Collapse";

export const getCategories = async (callback) => {
    try {
        const res = await api.fetchAllCategories();
        callback(res.data.categories);
    } catch (err) {
        console.log(err);
    }
};

export const getRandomPosts = async (callback) => {
    try {
        const res = await api.fetchRandomPosts();
        callback(res.data.posts);
    } catch (err) {
        console.log(err);
    }
};

export const getAllLatestPosts = async (id, callback) => {
    try {
        const { data } = await api.fetchLatestPosts();
        callback(actions.fetchLatestPosts(data.posts));
    } catch (err) {
        console.log(err);
    }
};

export const getSearchResults = async (searchText, callback) => {
    try {
        const res = await api.fetchSearchResults({ searchText });
        callback(res.data.posts);
    } catch (err) {
        console.log(err);
    }
};

export const getPostById = async (id, callback) => {
    try {
        const res = await api.fetchPostById(id);
        callback(actions.fetchPostById(res.data.post));
    } catch (err) {
        console.log(err);
    }
};

export const handleLikeBtn = async (id, callback_1, callback_2) => {
    try {
        await api.likePost(id);
        callback_2(id, callback_1);
    } catch (err) {
        console.log(err);
    }
};

export const commentFormHandler = async (values, callback, snackbar) => {
    try {
        const res = await api.createNewComment(values);
        callback(actions.fetchPostById(res.data.post));
        snackbar("Comment added", {
            anchorOrigin: {
                vertical: "bottom",
                horizontal: "right",
            },
            TransitionComponent: Collapse,
            variant: "success",
        });
    } catch (err) {
        console.log(err);
        snackbar("Some error occured", {
            anchorOrigin: {
                vertical: "bottom",
                horizontal: "right",
            },
            TransitionComponent: Collapse,
            variant: "error",
        });
    }
};
