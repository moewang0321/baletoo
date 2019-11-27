import axios from 'axios'

export const get = ({
    url,
    params
}) => {
    return axios({
            url,
            params
        })
        .then((result) => {
            return result.data
        })
        .catch((error) => {
            return error.message
        })
}

export const post = ({
    url,
    payload
}) => {
    return axios.post(
            url,
            payload, {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
                }
            }).then((result) => {
            return result.data
        })
        .catch((error) => {
            return error.message
        });
}