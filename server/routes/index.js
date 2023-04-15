const router =require("express").Router()
const authRoutes = require("./authRoutes")
const landingRoutes =require("./landingRoutes")

router.use("/auth", authRoutes)
router.use("/landing", landingRoutes)

module.exports = router