const passport = require("passport")

module.exports = {
    registerAUser: (req, res, next) => {
        passport.authenticate("register", (err, user, info) => {
            if (err) {
                return res.status(202).json(info)
            }
            if (user === false) {
                return res.status(202).json(info)
            } else {
                
                req.login(user, (err) => {
                    if (err) {
                        console.log(err)
                    }
                    let frontEndUser = {
                        _id: user._id,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        email: user.email,
                        role: user.role
                    }
                    return res.status(200).json({ user: frontEndUser })
                });
            }
        })(req, res, next)
    },
    loginAUser: (req, res, next) => {
        passport.authenticate("login", (err, user, info) => {
            if (err) {
                return res.status(202).json(info)
            }
            if (user === false) {
                return res.status(202).json(info)
            } else {
                req.login(user, (err) => {
                    if (err) {
                        console.log(err)
                    }
                    let frontEndUser = {
                        _id: user._id,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        email: user.email,
                        role: user.role
                    }
                    return res.status(200).json({ user: frontEndUser })
                });
            }
        })(req, res, next)
    },
    logoutAUser: (req, res) => {
        req.logout((err) => {
            if (err) {
                console.log(err)
            }
            return res.json({ message: "User is logged out."})
        }) 
    },
    getUser: (req, res) => {
        if (req.user) {
            let { firstName, lastName, email, _id, role } = req.user
            let user = Object.assign({ firstName, lastName, email, _id, role })
            res.status(200).json({user})
        } else {
            res.status(202).json({message: "There is no user!"})
        }

    },
    loginAdmin: (req, res, next)=>{
        passport.authenticate("admin", (err, user, info) => {
            if (err) {
                return res.status(202).json(info)
            }
            if (user === false) {
                return res.status(202).json(info)
            } else {
               return res.status(200).json({})
            }
        })(req, res, next)
    },
    checkAuthenticated: (req, res)=>{
        if(req.isAuthenticated()){
            let { firstName, lastName, email, _id, role } = req.user
            return res.status(200).json({user: {firstName, lastName, email, _id, role}})
        } else {
            return res.status(202).json({message: "NO user!"})
        }
    }
}