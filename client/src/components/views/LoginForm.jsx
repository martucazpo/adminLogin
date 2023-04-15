import { connect } from "react-redux"
import Form from "../Form"
import TextInput from "../TextInput"
import actions from "../../utils/redux/actions"
import API from "../../utils/api"

const LoginForm = (props) => {
    const handleSubmit = async (e) => {
        e.preventDefault()
        let { email, password } = props.auth 
        await API.login({email, password})
    }
    return (
        <div className="form-wrapper">
            <Form handleSubmit={handleSubmit} btnTxt="LOGIN" >
                <TextInput name="email" labelTxt="Email" required={true} handleChange={props.handleChange} />
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)