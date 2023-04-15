import { connect } from "react-redux"
import Form from "../Form"
import TextInput from "../TextInput"
import actions from "../../utils/redux/actions"
import API from "../../utils/api"

const AdminLogin = (props) => {
    const handleSubmit = async (e) => {
        e.preventDefault()
        let { username, password } = props.auth 
        await API.adminLogin({username, password})
    }
    return (
        <div className="form-wrapper">
            <Form handleSubmit={handleSubmit} btnTxt="LOGIN" >
                <TextInput name="username" labelTxt="Admin Username" required={true} handleChange={props.handleChange} />
                <TextInput name="password" labelTxt="Password" required={true} handleChange={props.handleChange} />
            </Form>
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
        handleChange: (input)=>dispatch(actions.handleAuthChange(input))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminLogin)