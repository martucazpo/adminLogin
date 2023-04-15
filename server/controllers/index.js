const authControllers = require("./authControllers")
const landingControllers = require("./landingControllers")
const middleware = require("./middleware")

module.exports = {
    login: authControllers.loginAUser,
    register: authControllers.registerAUser,
    logout: authControllers.logoutAUser,
    ensureAuthenticated: middleware.ensureAuthenticated,
    ensureAdmin: middleware.ensureAdmin,
    getUser: authControllers.getUser,
    loginAdmin: authControllers.loginAdmin,
    checkAuthenticated: authControllers.checkAuthenticated
}