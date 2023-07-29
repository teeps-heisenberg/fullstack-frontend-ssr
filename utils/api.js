import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000'; // Replace with your backend URL

const axiosInstance = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const getAllUsers = async () => {
    try {
        const response = await axiosInstance.get('/user');
        return response.data;
    } catch (error) {
        console.error('Error fetching users:', error);
        return [];
    }
};

export const getUserById = async (userId) => {
    try {
        const response = await axiosInstance.get(`/user/${userId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching user:', error);
        return null;
    }
};

export const createUser = async (userData) => {
    try {
        const response = await axiosInstance.post('/user', userData);
        return response.data;
    } catch (error) {
        console.error('Error creating user:', error);
        return null;
    }
};

export const updateUser = async (userId, updatedUserData) => {
    try {
        const response = await axiosInstance.put(`/user/${userId}`, updatedUserData);
        return response.data;
    } catch (error) {
        console.error('Error updating user:', error);
        return null;
    }
};

export const deleteUser = async (userId) => {
    try {
        await axiosInstance.delete(`/user/${userId}`);
    } catch (error) {
        console.error('Error deleting user:', error);
    }
};

export const getAllArticles = async () => {
    try {
        const response = await axiosInstance.get('article');
        return response.data;
    } catch (error) {
        console.error('Error deleting user:', error);
        return [];
    }
};

export const getArticleById = async (articleId) => {
    try {
        const response = await axiosInstance.get(`article/${articleId}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting user:', error);
        return null;
    }
};

export const createArticle = async (articleData) => {
    try {
        const response = await axiosInstance.post('/article', articleData);
        return response.data;
    } catch (error) {
        console.error('Error creating user:', error);
        return null;
    }
};