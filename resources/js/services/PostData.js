import axios from 'axios';

export function PostData(type, userData) {
    return axios
        .post('/api/' + type, userData, {
            username: userData.username,
            password: userData.password,
        }, {
            headers: {'Content-Type': 'application/json'},
        })
        .then(result => {
            localStorage.setItem('userToken', result.data.access_token);
            return result;
        })
        .catch(error => {
            return error;
        });
}