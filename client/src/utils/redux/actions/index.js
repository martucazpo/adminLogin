import authActions from "./authActions"
import appActions from "./appActions"

export default {
    handleAuthChange: authActions.handleAuthChange,
    toggleLogin: authActions.toggleIsLogin,
    openAuthModal: authActions.openAuthModal,
    closeAuthModal: authActions.closeAuthModal,
    setUser: authActions.setUser,
    setMessage: authActions.setMessage,
    openAdminModal: authActions.openAdminModal,
    closeAdminModal: authActions.closeAdminModal,
    setAdminMessage: authActions.setAdminMessage,
    clearAdminMsg: authActions.clearAdminMsg,
    setAuth: authActions.setAuth,
    logout: authActions.logout,
    setAdmin: authActions.setAdmin,
    setAdminLoginMsg: authActions.setAdminLoginMsg
}