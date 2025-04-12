const AuthData = require('../data/auth.data');  // Make sure this points to your correct path
const bcrypt = require('bcryptjs');
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
    
            // 1. Fetch user data from DB
            const user = await authData.findUserByEmail(email);
            if (!user) {
                throw new Error('User not found');
            }
    
            // 2. Hash the input password with SHA1 (same as signup)
            const hashedInputPassword = crypto.createHash('sha1').update(password).digest("hex");
    
            // 3. Compare hashed passwords
            if (hashedInputPassword !== user.password) {
                throw new Error('Invalid password');
            }
    
            // 4. Create JWT Token
            const token = jwt.sign(
                { userID: user.id, email: user.email },
                process.env.JWT_SECRET,
                { expiresIn: '1d' }
            );
    
            // 5. Return token + user info
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
