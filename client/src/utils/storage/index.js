import store from "../redux/store"
import actions from "../redux/actions"
import API from "../api"

export default {
    setMessage: (message)=>{
        sessionStorage.setItem("adminMsg", JSON.stringify(message))
    },
    unsetMessage: ()=>{
        sessionStorage.setItem("adminMsg", JSON.stringify(null))
    },
    getAdminMsg: async ()=>{
        let message = await JSON.parse(sessionStorage.getItem("adminMsg"))
        if(message){
            store.dispatch(actions.setAdminMessage(message))
        }
    }
}