const AuthData = require('../data/auth.data');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const CryptoJS = require('crypto-js');
const authData = new AuthData();

const secretKey = "sD3#7kP@!29zLr8q^T5vK0wZ!eF$YxN#";

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
            const { email, password } = req.body; 

            // Decrypt the password from frontend
            const bytes = CryptoJS.AES.decrypt(password, secretKey);
            const decryptedPassword = bytes.toString(CryptoJS.enc.Utf8);

            if (!decryptedPassword) {
                throw new Error('Failed to decrypt password. Possibly wrong secret key.');
            }

            // Hash the decrypted password (SHA-1 hash)
            const hashedInputPassword = crypto.createHash('sha1').update(decryptedPassword).digest("hex");

            // Find user by email
            const user = await authData.findUserByEmail(email);
            if (!user) {
                throw new Error('User not found');
            }

            // Check hashed password match
            if (hashedInputPassword !== user.password) {
                throw new Error('Invalid password');
            }

            // Generate JWT token
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
