const TOKEN_KEY = "auth_token";

export const isUserSignedIn = () => {
    if (localStorage.getItem(TOKEN_KEY)) {
        return true;
    }
};

export const setUserSignedIn = (token) => {
    localStorage.setItem(TOKEN_KEY, token);
};

export const removeUserSignedIn = () => {
    localStorage.removeItem(TOKEN_KEY);
};

export const getUserAuthToken = () => {
    return localStorage.getItem(TOKEN_KEY);
};

export const getUserId = () => {
    return localStorage.getItem("user");
};
