import axios from 'axios'

export const axiosRequest = (method, url, data = null) => {
    const URL = 'https://vocab-aap.herokuapp.com' + url;
    return axios({
        method: method,
        url: URL,
        headers: {
            "Content-Type": "application/json"
        },
        data: data
    })
    .then((res) => res)
    .catch((err) => {
            throw err;
    });    
}