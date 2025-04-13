import React, { useState } from "react";
import AuthLayout from "../../components/layouts/AuthLayout";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/Inputs/Input";
import { validateEmail } from "../../utils/helper";
import axiosInstence from "../../utils/axiosInstance";
import { API_PATHS } from "../../utils/apiPaths";
import { toast } from "react-hot-toast";

function SignUp() {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSignUp = async (e) => {
        e.preventDefault();

        if (!fullName) {
            setError("Please enter your name");
            return;
        }

        if (!validateEmail(email)) {
            setError("Please enter a valid email address.");
            return;
        }

        if (!password) {
            setError("Please enter the password.");
            return;
        }

        setError("");

        try {
            const response = await axiosInstence.post(API_PATHS.AUTH.REGISTER, {
                name: fullName,
                email,
                password,
            });

            if (response.data?.success) {
                toast.success(response.data.message || "Signup Successful!");
                navigate("/login");
            } else {
                toast.error("Registration failed. Try again.");
            }
        } catch (error) {
            if (error.response?.data?.message) {
                toast.error(error.response.data.message);
            } else {
                toast.error("Something went wrong. Please try again.");
            }
        }
    };

    return (
        <AuthLayout>
            <div className="w-full h-auto md:h-full mt-10 md:mt-0 flex flex-col justify-center px-4">
                <h3 className="text-xl font-semibold text-black">Create an account</h3>

                <form onSubmit={handleSignUp}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Input
                            value={fullName}
                            onChange={({ target }) => setFullName(target.value)}
                            label="Full Name"
                            placeholder="Enter Name"
                            type="text"
                        />
                        <Input
                            value={email}
                            onChange={({ target }) => setEmail(target.value)}
                            label="Email Address"
                            placeholder="shivanshu@gmail.com"
                            type="text"
                        />
                        <div className="md:col-span-2">
                            <Input
                                value={password}
                                onChange={({ target }) => setPassword(target.value)}
                                label="Password"
                                placeholder="Min 8 Characters"
                                type="password"
                            />
                        </div>
                    </div>

                    {error && <p className="text-red-500 text-xs pb-2.5">{error}</p>}

                    <button className="btn-primary mt-4" type="submit">
                        SIGN UP
                    </button>

                    <p className="text-[13px] text-slate-800 mt-3">
                        Already have an account?{" "}
                        <Link className="font-medium text-primary underline" to="/login">
                            Login
                        </Link>
                    </p>
                </form>
            </div>
        </AuthLayout>
    );
}

export default SignUp;
