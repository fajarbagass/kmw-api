const jwt = require("jsonwebtoken");
const adminServices = require("../services/adminService");
module.exports = {
    async authorize(req, res, next) {
        try {
            const bearerToken = req.headers.authorization;
            const token = bearerToken.split("Bearer ")[1];
            const tokenPayLoad = jwt.verify(token, process.env.JWT_SIGNATURE_KEY);

            req.admin = await adminServices.find(tokenPayLoad.id);
            next();
        } catch (error) {
            res.status(401).json({
                name: "notLogin",
                message: "You are not login/access_token is wrong",
            }); 
        };
    },
};