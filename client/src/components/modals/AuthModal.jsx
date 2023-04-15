import { connect } from "react-redux"
import Modal from "../Modal"
import RegLogin from "../views/RegLogin"
import actions from "../../utils/redux/actions"


const AuthModal = (props) => {
    return (
        <Modal
            handleClick={props.closeModal}
            modalClass="auth-modal"
            modalContentClass="auth-modal-content">
            <RegLogin />
        </Modal>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        closeModal: () => dispatch(actions.closeAuthModal())
    }
}

export default connect(null, mapDispatchToProps)(AuthModal)