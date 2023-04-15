import { connect } from "react-redux"
import Form from "../Form"
import TextInput from "../TextInput"
import actions from "../../utils/redux/actions"
import storage from "../../utils/storage"



const AdminModalForm = (props) =>{
    const handleSubmit = (e) =>{
        let message = props.auth.adminInput
        e.preventDefault()
        props.setAdminMessage(message)
        storage.setMessage(message)
    }
    const handleClick = () =>{
        props.clearAdminMsg()
        storage.unsetMessage()
    }
    return (
        <div>
              <Form 
                handleSubmit={handleSubmit} 
                btnTxt="SUBMIT">
                    <TextInput 
                    labelTxt="Message for the world"
                    name="adminInput" 
                    value={props.auth.adminInput}
                    required={true}
                    handleChange={props.handleChange}
                    />
                </Form>
                <button onClick={handleClick} >Clear Admin Message</button>
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
        handleChange: (input)=>dispatch(actions.handleAuthChange(input)),
        setAdminMessage: (message)=>dispatch(actions.setAdminMessage(message)),
        clearAdminMsg: ()=>dispatch(actions.clearAdminMsg())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminModalForm)