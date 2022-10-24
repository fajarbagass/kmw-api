const { Admin } = require("../models");

module.exports = {
    find(id) {
        return Admin.findByPk(id);
    },
    findByUsername(username) {
        return Admin.findOne({
            where: {
                username,
            },
        });
    },
    update(id, admin) {
        return Admin.update(
            {
                name: admin.name,
                username: admin.username,
            },{
                where: {
                    id,
                },
            },
        );
    },
    changePassword(id, password) {
        return Admin.update(
            {
                password,
            },
            {
                where: {
                    id,
                }
            },
        );
    },
};