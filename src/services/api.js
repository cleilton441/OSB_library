import Axios from 'axios'

const api = Axios.create({
    baseURL: ' https://hn.algolia.com/api/v1/search?query='
})

export default api;