import {Info} from './user'
import axios from 'axios'

const client = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
})

const user = {
    Info: Info(client),
}
export {user}