import authApi from "./authApi"

export default {
    register: authApi.registerUser,
    login: authApi.loginUser,
    getUser: authApi.getUser,
    logout: authApi.logoutUser,
    adminLogin: authApi.adminLogin,
    checkAuth: authApi.checkAuth
}