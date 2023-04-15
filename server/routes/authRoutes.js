const router =require("express").Router()
const controllers = require("../controllers")


router.route("/login").post(controllers.login)
router.route("/register").post(controllers.register)
router.route("/logout").post(controllers.logout)
router.route("/user").post(controllers.ensureAuthenticated,controllers.getUser)
router.route("/adminlogin").post(controllers.ensureAdmin,controllers.loginAdmin)
router.route("/justchecking").post(controllers.checkAuthenticated)

module.exports = router