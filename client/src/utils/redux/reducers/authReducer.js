import { CLEAR_ADMIN_MSG, CLOSE_ADMIN_MODAL, CLOSE_AUTH_MODAL, HANDLE_AUTH_CHANGE, LOGOUT, OPEN_ADMIN_MODAL, OPEN_AUTH_MODAL, SET_ADMIN, SET_ADMIN_LOGIN_MSG, SET_ADMIN_MSG, SET_AUTH, SET_MESSAGE, SET_USER, TOGGLE_IS_LOGIN } from "../types"

let initialState = {
    isAuth: false,
    firstName: "",
    lastName: "",
    email: "",
    password1: "",
    password2: "",
    password: "",
    admin: false,
    isLogin: true,
    authModal: false,
    user: {},
    message: "",
    adminInput: "",
    adminMsg: "",
    adminModal: false,
    username: "",
    isAdmin: false,
    adminLoginMsg: ""
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case HANDLE_AUTH_CHANGE:
            if (action.payload.type === "checkbox") {
                return {
                    ...state,
                    [action.payload.name]: action.payload.checked,
                }
            } else {
                return {
                    ...state,
                    [action.payload.name]: action.payload.value
                }
            }
        case TOGGLE_IS_LOGIN:
            return {
                ...state,
                isLogin: !state.isLogin
            }
        case OPEN_AUTH_MODAL:
            return {
                ...state,
                authModal: true,
                isLogin: true
            }
        case CLOSE_AUTH_MODAL:
            return {
                ...state,
                authModal: false,
                isLogin: true
            }
        case SET_USER:
            return {
                ...state,
                user: Object.assign(state.user, action.payload),
                isAuth: true,
                firstName: "",
                lastName: "",
                email: "",
                password1: "",
                password2: "",
                password: "",
                admin: false,
                isLogin: true,
                authModal: false,
                message: "",
                adminInput: "",
                adminModal: false,
                username: "",
                isAdmin: false,
                adminLoginMsg: ""
            }
        case SET_MESSAGE:
            return {
                ...state,
                message: action.payload
            }
        case OPEN_ADMIN_MODAL:
            return {
                ...state,
                adminModal: true,
                username: "",
                password: "",
                isAdmin: false,
                adminLoginMsg: ""
            }
        case CLOSE_ADMIN_MODAL:
            return {
                ...state,
                adminModal: false,
                username: "",
                password: "",
                isAdmin: false,
                adminLoginMsg: ""
            }
        case SET_ADMIN_MSG:
            return {
                ...state,
                adminMsg: action.payload,
                adminInput: "",
                adminModal: false,
                adminLoginMsg: ""
            }
        case CLEAR_ADMIN_MSG:
            return {
                ...state,
                adminMsg: "",
                adminModal: false,
                adminLoginMsg: ""
            }
        case SET_AUTH:
            return {
                ...state,
                isAuth: true
            }
        case LOGOUT:
            return {
                ...state,
                isAuth: false,
                firstName: "",
                lastName: "",
                email: "",
                password1: "",
                password2: "",
                password: "",
                admin: false,
                isLogin: true,
                authModal: false,
                user: {},
                message: "",
                adminInput: "",
                adminModal: false,
                username: "",
                isAdmin: false,
                adminLoginMsg: ""
            }
        case SET_ADMIN:
            return {
                ...state,
                isAdmin: true,
                password: "",
                username: "",
                adminLoginMsg: ""
            }
        case SET_ADMIN_LOGIN_MSG:
            return {
                ...state,
                adminLoginMsg: action.payload
            }
        default:
            return state
    }
}


export default authReducer