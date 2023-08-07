import axios from 'axios';

const API_URL = 'http:localhost:8081';
axios.defaults.baseURL = API_URL;

const register = ({ firstName, lastName, userName, email, password }) => {
    return axios.post('/api/auth/register', {
        firstName,
        lastName,
        userName,
        email,
        password
    });
};

const login = (userName, password) => {
    return axios
        .post(API_URL + '/api/auth/login', {
            userName,
            password
        })
        .then((response) => {
            if (response.data?.detail?.accessToken) {
                localStorage.setItem('user', JSON.stringify(response.data.detail));
            }
            return response.data;
        });
};

const logout = () => {
    localStorage.removeItem('user');
};

const authService = {
    register,
    login,
    logout
};

export default authService;
