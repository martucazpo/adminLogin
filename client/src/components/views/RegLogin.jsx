import { connect } from "react-redux"
import RegistrationForm from "./RegistrationForm"
import LoginForm from "./LoginForm"
import actions from "../../utils/redux/actions"

const RegLogin = (props) => {
    return (
        <div className="reglogin-wrapper">
            <div className="reglogin-form-div">
                {
                    props.auth.isLogin ?
                        <LoginForm /> :
                        <RegistrationForm />
                }
            </div>
            <div className="reglogin-btn-div">
                <button onClick={props.toggleLogin} >{props.auth.isLogin ? "REGISTER" : "LOGIN"}</button>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleLogin: () => dispatch(actions.toggleLogin())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegLogin)