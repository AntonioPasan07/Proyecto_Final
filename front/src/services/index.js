import {register, login, logout} from './auth'
import {Info, useEvent} from './user'
import {useEventoCreate, getEvent} from './evento'
import {useInvitados, useLista} from './invitados'
import axios from 'axios'

const client = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
})

const user = {
    Info: Info(client),
    useEvent: useEvent(client),
}


const auth = {
    register: register(client),
    login: login(client),
    logout: logout(client),
}

const eventos = {
    getEvent: getEvent(client),
    useEventoCreate: useEventoCreate(client),
}
const invitados = {
    useInvitados: useInvitados(client),
    useLista: useLista(client),
}

export {user, auth, eventos,invitados}