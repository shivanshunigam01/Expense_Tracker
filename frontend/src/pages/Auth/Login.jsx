import React, { useState } from "react";
import AuthLayout from "../../components/layouts/AuthLayout";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/Inputs/Input";
import { validateEmail } from "../../utils/helper";
import axiosInstence from "../../utils/axiosInstance";
import { API_PATHS } from "../../utils/apiPaths";
import { toast } from "react-hot-toast";
import CryptoJS from "crypto-js";
import { useDispatch } from "react-redux";
import { LOGIN } from "../../context/auth-reducer/actions";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogin = async (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setError("Please enter a valid email address.");
            return;
        }

        if (!password) {
            setError("Please enter the password.");
            return;
        }

        setError("");

        const secretKey = "sD3#7kP@!29zLr8q^T5vK0wZ!eF$YxN#";
        const encryptedPassword = CryptoJS.AES.encrypt(password, secretKey).toString();

        try {
            const response = await axiosInstence.post(API_PATHS.AUTH.LOGIN, {
                email,
                password: encryptedPassword,
            });

            const { token, user } = response.data.data;

            if (token) {
                localStorage.setItem("token", token);

                
                dispatch({
                    type: LOGIN,
                    payload: {
                        user,
                        isLoggedIn: true,
                    },
                });

                toast.success("Login successful!");
                navigate("/dashboard");
            } else {
                toast.error("Invalid response from server.");
            }
        } catch (error) {
            const res = error?.response;

            if (
                res &&
                res.status === 417 &&
                typeof res.data.message === "object" &&
                Object.keys(res.data.message).length === 0
            ) {
                toast.error("Something went wrong. Expectation Failed.");
            } else {
                const errMessage =
                    res?.data?.message && typeof res.data.message === "string"
                        ? res.data.message
                        : "Something went wrong. Please try again.";
                toast.error(errMessage);
            }
        }
    };

    return (
        <AuthLayout>
            <div className="lg:w-[70%] h-3/4 md:h-full flex flex-col justify-center">
                <h3 className="text-xl font-semibold text-black">Welcome Back</h3>
                <p className="text-xs font-slate-700 mt-[5px] mb-6">
                    Please enter your details to log in
                </p>

                <form onSubmit={handleLogin}>
                    <Input
                        value={email}
                        onChange={({ target }) => setEmail(target.value)}
                        label="Email Address"
                        placeholder="email@example.com"
                        type="text"
                    />
                    <Input
                        value={password}
                        onChange={({ target }) => setPassword(target.value)}
                        label="Password"
                        placeholder="Min 8 Characters"
                        type="password"
                    />

                    {error && <p className="text-red-500 text-xs pb-2.5">{error}</p>}

                    <button className="btn-primary" type="submit">
                        LOGIN
                    </button>
                    <p className="text-[13px] text-slate-800 mt-3 ">
                        Don't have an account?{" "}
                        <Link className="font-medium text-primary underline" to="/signUp">
                            SignUp
                        </Link>
                    </p>
                </form>
            </div>
        </AuthLayout>
    );
}

export default Login;
