import { connect } from "react-redux"
import Form from "../Form"
import TextInput from "../TextInput"
import CheckBoxInput from "../CheckBoxInput"
import actions from "../../utils/redux/actions"
import API from "../../utils/api"

const RegistrationForm = (props) => {
    const handleSubmit = async (e) => {
        e.preventDefault()
        let password
        let { firstName, lastName, email, password1, password2, admin } = props.auth
        if(password1 !== password2){
            props.setMessage({message: "The passwords do not match"})
        } else {
            password = password1
        }
        let newUser = Object.assign({}, {firstName, lastName, email, password })
        if(admin){
            newUser.role = "admin"
        }
        await API.register(newUser)
    }
    return (
        <div className="form-wrapper">
            <Form handleSubmit={handleSubmit} btnTxt="REGISTER" >
                <TextInput name="firstName" labelTxt="First Name" required={true} handleChange={props.handleChange} />
                <TextInput name="lastName" labelTxt="Last Name" required={true} handleChange={props.handleChange} />
                <TextInput name="email" labelTxt="Email" required={true} handleChange={props.handleChange} />
                <TextInput name="password1" labelTxt="Please Enter A Password" required={true} handleChange={props.handleChange} />
                <TextInput name="password2" labelTxt="Please Re-enter Password" required={true} handleChange={props.handleChange} />
                <fieldset>
                    <legend>Check if Apply</legend>
                    <CheckBoxInput name="admin" labelTxt="Admin Role?" required={false} handleChange={props.handleChange} checked={props.auth.admin}/>
                </fieldset>
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
        handleChange: (input)=>dispatch(actions.handleAuthChange(input)),
        setMessage: (message)=>dispatch(actions.setMessage(message))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm)
