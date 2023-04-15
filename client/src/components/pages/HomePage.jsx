import React from "react"
import { connect } from "react-redux"
import AdminModal from "../modals/AdminModal"
import storage from "../../utils/storage"
import API from "../../utils/api"

class HomePage extends React.Component {
    componentDidMount(){
        if(!this.props.auth.user.hasOwnProperty("email")){
           API.checkAuth() 
        }
        storage.getAdminMsg()
    }
    render() {
        return (
            <div>
                {this.props.auth.adminModal && <AdminModal />}
                <h1>HOME</h1>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        app: state.app
    }
}

export default connect(mapStateToProps)(HomePage)