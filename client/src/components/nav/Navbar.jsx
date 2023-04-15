import { connect } from "react-redux"
import actions from "../../utils/redux/actions"
import API from "../../utils/api"

const Navbar = (props) => {
    return (
        <header>
            <span className="welcome-span">
                {!props.auth.isAuth ? <h3>Welcome</h3> : <h3>Welcome {props.auth.user.firstName}</h3>}
            </span>
            <span className="auth-btn-span">
                {!props.auth.isAuth ? <button onClick={props.openModal}>LOGIN</button> : <button onClick={API.logout}>LOGOUT</button>}
            </span>
            <span className="admin-message-span">
                {props.auth.adminMsg && <h1>{props.auth.adminMsg}</h1>}
            </span>
            <span className="admin-btn">
                {props.auth.isAuth && props.auth.user.role === "admin" && <button onClick={props.openAdminModal}>ADMIN</button>}
            </span>
        </header>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        openModal: () => dispatch(actions.openAuthModal()),
        openAdminModal: () => dispatch(actions.openAdminModal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)