const adminRepository = require("../repositories/adminRepository");
const {
  encryptPassword,
  checkPassword,
  createToken,
} = require("../utils/authUtils");

module.exports = {
  async login(data) {
    try {
      const username = data.username;
      const password = data.password;

      const admin = await adminRepository.findByUsername(username);
      if (!admin) {
        throw {
          name: "wrongUsernamePassword",
          message: "Username or password are wrong",
        };
      }
      const isPasswordCorrect = await checkPassword(admin.password, password);

      if (!isPasswordCorrect) {
        throw {
          name: "wrongUsernamePassword",
          message: "Username or password are wrong",
        };
      }

      const token = createToken({
        id: admin.id,
        name: admin.name,
        username: admin.username,
      });

      return {
        id: admin.id,
        name: admin.name,
        username: admin.username,
        token,
      };
    } catch (error) {
      throw error;
    }
  },
  find(id) {
    return adminRepository.find(id);
  },
  async update(id, admin) {
    try {
      const adminData = await adminRepository.find(id);
      if (!adminData) {
        throw {
          name: "adminNotFound",
          message: "Admin is not found",
        };
      } else {
        await adminRepository.update(id, admin);
      }
    } catch (error) {
      throw error;
    }
  },
  async changePassword(id, data) {
    try {
      const admin = await adminRepository.find(id);
      if (!admin) {
        throw {
          name: "adminNotFound",
          message: "Admin is not found",
        };
      }
      if ((data.new_password = data.confirm_password)) {
        const passwordCompare = await checkPassword(
          admin.password,
          data.old_password
        );
        if (!passwordCompare) {
          throw {
            name: "badRequest",
            message: "Old password is wrong",
          };
        }
        const encryptedPassword = await encryptPassword(data.new_password);
        return adminRepository.changePassword(id, encryptedPassword);
      } else {
        throw {
          name: "badRequest",
          message: "New password and confirm password are not equals",
        };
      }
    } catch (error) {
      throw error;
    }
  },
};
