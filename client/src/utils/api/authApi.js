import instance from "./instance"
import store from "../redux/store"
import actions from "../redux/actions"
//import storage from "../storage"
const AUTH = process.env.REACT_APP_AUTH


export default {
    registerUser: async (user)=> instance.post(AUTH + "register", user).then(res => {
        if(res.status === 200){
            //storage.setIsAuth()
            return store.dispatch(actions.setUser(res.data.user))
        } else {
            return store.dispatch(actions.setMessage(res.data.message))
        }
    }),
    loginUser: async (user)=> instance.post(AUTH + "login", user).then(res => {
        if(res.status === 200){
            //storage.setIsAuth()
            return store.dispatch(actions.setUser(res.data.user))
        } else {
            return store.dispatch(actions.setMessage(res.data.message))
        }
    }),
    logoutUser: async ()=> instance.post(AUTH + "logout", {}).then(res => {
        //storage.setNotAuth()
        return store.dispatch(actions.logout())
    }),
    getUser: async ()=> instance.post(AUTH + "user", {}).then(res =>{
        if(res.status === 200){
            return store.dispatch(actions.setUser(res.data.user))
        } else {
            return store.dispatch(actions.setMessage(res.data.message))
        }
    }),
    adminLogin: async (credentials)=> instance.post(AUTH + "adminlogin", credentials).then(res => {
        if(res.status === 200){
            return store.dispatch(actions.setAdmin())
        } else {
            return store.dispatch(actions.setAdminLoginMsg(res.data.message))
        }
    }),
    checkAuth: async ()=> instance.post(AUTH + "justchecking", {}).then(res => {
        if(res.status === 200){
            return store.dispatch(actions.setUser(res.data.user))
        } else {
            return store.dispatch(actions.logout())
        }
    })
}