const adminServices = require("../../../services/adminService");

module.exports = {
    async login(req, res) {
        try {
            const data = req.body;
            const admin = await adminServices.login(data);
            res.status(200).json({
                status: "success",
                data: {
                    id: admin.id,
                    name: admin.name,
                    username: admin.username,
                    token: admin.token,
                },
            });
        } catch (error) {
            if(error.name === "badRequest") {
                res.status(400).json({
                    name: error.name,
                    message: error.message,
                });
            } else if(error.name === "wrongUsernamePassword") {
                res.status(401).json({
                    name: error.name,
                    message: error.message,
                });
            } else {
                res.status(500).json({
                    name: error.name,
                    message: error.message,
                });
            };
        };
    },
    async getCurrentAdmin(req, res) {
        res.status(200).json({
            data: req.admin,
        });
    },
    async update(req, res) {
        try {
            await adminServices.update(req.admin.id, req.body);
            res.status(200).json({
                status: "success",
                message: "admin updated sucessfully",
            });
        } catch (error) {
            if (error.name === "admintNotFound") {
                res.status(404).json({
                    name: error.name,
                    message: error.message,
                });
            } else if (error.name === "badRequest" || error.name === "SequelizeValidationError") {
                res.status(400).json({
                    name: error.name,
                    message: error.message,
                });
            } else {
                res.status(500).json({
                    name: error.name,
                    message: error.message,
                });
            };
        };
    },
    async changePassword(req, res) {
        try {
            const data = req.body;
            await adminServices.changePassword(req.admin.id, data);
            res.status(200).json({
                status: "success",
                message: "password changed successfully",
            });
        } catch (error) {
            if (error.name === "badRequest" || error.name === "SequelizeValidationError") {
                res.status(400).json({
                    name: error.name,
                    message: error.message,
                });
            } else {
                res.status(500).json({
                    name: error.name,
                    message: error.message,
                });
            };
        };
    },
};