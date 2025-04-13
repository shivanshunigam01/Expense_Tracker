const AuthData = require('../data/auth.data');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const authData = new AuthData();

/**
 * Auth Manager.
 */
class AuthManager {
    /**
     * User Signup.
     * @param {Object} req.body
     * @returns {Object}
     */
    async signup(req) {
        try {
            const userRes = await authData.signup(req);
            return userRes;
        } catch (error) {
            throw error;
        }
    }

    /**
     * User Login.
     * @param {Object} req.body
     * @returns {Object}
     */
    async login(req) {
        try {
            const { email, password } = req;


            const user = await authData.findUserByEmail(email);
            if (!user) {
                throw new Error('User not found');
            }


            const hashedInputPassword = crypto.createHash('sha1').update(password).digest("hex");


            if (hashedInputPassword !== user.password) {
                throw new Error('Invalid password');
            }


            const token = jwt.sign(
                { userID: user.id, email: user.email },
                process.env.JWT_SECRET,
                { expiresIn: '1d' }
            );


            return {
                token,
                user: {
                    id: user.id,
                    name: user.name,
                    email: user.email
                }
            };

        } catch (error) {
            throw error;
        }
    }

    /**
     * Get Profile by UserID from Token.
     * @param {Object} req
     * @returns {Object}
     */
    async getProfile(req) {
        try {
            const userID = req.user.userID;
            const result = await authData.getUserById(userID);
            return result;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = AuthManager;
