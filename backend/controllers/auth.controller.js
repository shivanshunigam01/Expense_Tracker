const apiResponse = require("../helpers/apiResponse");
const AuthManager = require('../manager/auth.manager.js');
const authManager = new AuthManager();

/**
 * User Signup
 */
exports.signup = async (req, res) => {
    try {
        const result = await authManager.signup(req.body);
        if (result) {
            return apiResponse.successResponseWithData(res, "Signup Successful");
        } else {
            return apiResponse.unauthorizedResponse(res, "Signup failed");
        }
    } catch (error) {

        if (error.code === 'ER_DUP_ENTRY') {
            return apiResponse.validationErrorWithData(res, "Email already exists", {});
        }


        return apiResponse.expectationFailedResponse(res, error);
    }
};

/**
 * User Login
 */
exports.login = async (req, res) => {
    try {
        const result = await authManager.login(req);
        if (result) {
            return apiResponse.successResponseWithData(res, "Login Successful", result);
        } else {
            return apiResponse.unauthorizedResponse(res, "Invalid email or password.");
        }
    } catch (error) {
        return apiResponse.expectationFailedResponse(res, error);
    }
};

/**
 * Get Profile
 */
exports.getProfile = async (req, res) => {
    try {
        const result = await authManager.getProfile(req);
        if (result) {
            return apiResponse.successResponseWithData(res, "Profile Fetched Successfully", result);
        } else {
            return apiResponse.notFoundResponse(res, "User not found.");
        }
    } catch (error) {
        return apiResponse.expectationFailedResponse(res, error);
    }
};
