import { connect } from "react-redux"
import Modal from "../Modal"
import AdminModalForm from "../views/AdminModalForm"
import AdminLogin from "../views/AdminLogin"
import actions from "../../utils/redux/actions"

const AdminModal = (props) =>{
    return (
        <div className="admin-modal-surround">
            <Modal 
            modalClass="admin-modal" 
            modalContentClass="admin-input" 
            handleClick={props.closeModal}
            > 
              {
                props.auth.isAdmin ? 
                <AdminModalForm /> : 
                <AdminLogin />
              }
              <div className="admin-login-msg-div">
                { props.auth.adminLoginMsg && <h3>{props.auth.adminLoginMsg}</h3>}
              </div>
            </Modal>
        </div>
    )
}

const mapStateToProps = (state) =>{
    return {
        auth: state.auth
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        closeModal: ()=>dispatch(actions.closeAdminModal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminModal)