import axios from 'axios'

export const API_URL = 'url'

const $api = axios.create
({
    baseURL: API_URL
}) 

export default $api; 