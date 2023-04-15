import React from "react"
import { connect } from "react-redux"
import AuthModal from "../modals/AuthModal"
import storage from "../../utils/storage"
import API from "../../utils/api"

class LandingPage extends React.Component {
    componentDidMount(){
        API.checkAuth()
        storage.getAdminMsg()
    }
    render() {
        return (
            <div>
                {this.props.auth.authModal && <AuthModal />}
                <h1>Landing Page</h1>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, null)(LandingPage)