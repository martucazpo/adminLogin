import { connect } from "react-redux"
import { Outlet, Navigate } from "react-router-dom"

const PublicRoute = (props) => {
    return (
        <>
            {props.auth.isAuth ? <Navigate to="/home" /> : <Outlet />}
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, null)(PublicRoute)