const jwt = require("jsonwebtoken");

const adminAuth = (req, res, next) => {
    const token = req.header("x-access-token");
    const roles = [Role];

    if (!token || typeof roles !== 'string') {
        res.status(400).json({
            msg: "Token Required"
        });
    } else {
        jwt.verify(token, process.env.AUTH_SECRET_KEY, function (err, decoded) {
            if (err) {
                return res.status(401).json({
                    msg: "Invalid Token",
                    error: err
                });
            }
            console.log(decoded);
            req.admin = decoded.id;
            next();
        });
    }
};

module.exports = adminAuth;