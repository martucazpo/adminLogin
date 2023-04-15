import { CLEAR_ADMIN_MSG, CLOSE_ADMIN_MODAL, CLOSE_AUTH_MODAL, HANDLE_AUTH_CHANGE, LOGOUT, OPEN_ADMIN_MODAL, OPEN_AUTH_MODAL, SET_ADMIN, SET_ADMIN_LOGIN_MSG, SET_ADMIN_MSG, SET_AUTH, SET_MESSAGE, SET_USER, TOGGLE_IS_LOGIN } from "../types"

export default {
    handleAuthChange: (input) => {
        return {
            type: HANDLE_AUTH_CHANGE,
            payload: input
        }
    },
    toggleIsLogin: () => {
        return {
            type: TOGGLE_IS_LOGIN
        }
    },
    openAuthModal: () => {
        return {
            type: OPEN_AUTH_MODAL
        }
    },
    closeAuthModal: () => {
        return {
            type: CLOSE_AUTH_MODAL
        }
    },
    setUser: (user) => {
        return {
            type: SET_USER,
            payload: user
        }
    },
    setMessage: (message) => {
        return {
            type: SET_MESSAGE,
            payload: message
        }
    },
    openAdminModal: () => {
        return {
            type: OPEN_ADMIN_MODAL
        }
    },
    closeAdminModal: () => {
        return {
            type: CLOSE_ADMIN_MODAL
        }
    },
    setAdminMessage: (message) => {
        return {
            type: SET_ADMIN_MSG,
            payload: message
        }
    },
    clearAdminMsg: () => {
        return {
            type: CLEAR_ADMIN_MSG
        }
    },
    setAuth: () => {
        return {
            type: SET_AUTH
        }
    },
    logout: ()=>{
        return {
            type: LOGOUT
        }
    },
    setAdmin: ()=>{
        return {
            type: SET_ADMIN
        }
    },
    setAdminLoginMsg: (message)=>{
        return {
            type: SET_ADMIN_LOGIN_MSG,
            payload: message
        }
    }
}