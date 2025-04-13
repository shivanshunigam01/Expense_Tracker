const db = require('../config/db');
const crypto = require('crypto');


/**
 * Auth Data Layer.
 */
class AuthData {
    /**
     * Sign up a new user
     * @param {Object} param0 
     * @returns {Object}
     */
    async signup({ name, email, password }) {
        const procedureName = "SignupUser";
        const hashedPassword = crypto.createHash('sha1').update(password).digest("hex");

        try {
            await db.query(`CALL ${procedureName}(?, ?, ?)`, [name, email, hashedPassword]);
            return { message: "Signup successful" };
        } catch (error) {
            throw error;
        }
    }

    /**
     * Find user by email
     * @param {string} email 
     * @returns {Object}
     */
    async findUserByEmail(email) {
        try {
            const [rows] = await db.query("CALL GetUserByEmail(?)", [email]);
            return rows[0][0];
        } catch (error) {
            throw error;
        }
    }



    /**
     * Get logged-in user's profile by ID
     * @param {number} userID 
     * @returns {Object}
     */
    async getUserById(userID) {
        const procedureName = "GetUserData";
        try {
            const [user] = await db.query(`CALL ${procedureName}(?)`, [userID]);
            return user[0];
        } catch (error) {
            throw error;
        }
    }
}

module.exports = AuthData;
