


module.exports = {
    ensureAuthenticated: (req, res, next) => {
        if (req.isAuthenticated()) {
            next()
        } else {
            return res.status(400).json({ message: "Please login or register to view this page." })
        }
    },
    ensureAdmin: async (req, res, next) => {
        if (req.isAuthenticated() && req.user.role === "admin") {
            next()
        } else {
            return res.status(400).json({ message: "Please log in as an admin user or contact a manager." })
        }
    }
}