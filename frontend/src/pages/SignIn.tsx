import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Auth, useAuth } from "../AuthManger/AuthContext";
import { authService } from "../AuthManger/AuthService";
import {NavBar } from "./Home"

export function SignIn() {
    const [loginData, setLogInData] = useState({
        email: '',
        password: ''
    })
    const { AuthUser, isLoading, isSuccess, Reset }: Auth = useAuth();
    const navigate = useNavigate();



    useEffect(()=>{
        if (authService.getLogedInUser() !== null) {
            navigate("/dashboard/");
        }
    },[])
    useEffect(() => {
        if (isSuccess) {
            console.log("Registered");
            Reset ? Reset() : null;
            navigate("/dashboard");
        }
    }, [isSuccess]);

    const { email, password } = loginData;

    const submit = (e:any) => {
        e.preventDefault()
        if (email === "" || password === "") {
            alert('No email or password')
            return
        }
        const userData = {
            email: email,
            password: password,
        };
        
        AuthUser? AuthUser(userData): null;
    }

    const onChange = (e: any) => {
        setLogInData((prevState) => ({
            ...prevState,
            [e.target.name]:e.target.value
        }))
    }
    
    
    

    return (
        <>
            <NavBar />
            <div className="sign">
                <div className="signWrap">
                    <div className="SignIn">
                        <h1>Account Login</h1>
                        <form
                            className="SignBox"
                            id="SignIn-Form"
                            onSubmit={submit}
                        >
                            <img src="" alt="" />
                            <p>Sign into your account</p>
                            <div className="wrapInput">
                                <input
                                    type="email"
                                    name="email"
                                    id="Email Address"
                                    placeholder="Email Address"
                                    required
                                    onChange={onChange}
                                />
                            </div>
                            <div className="wrapInput">
                                <input
                                    type="password"
                                    name="password"
                                    id="Password"
                                    placeholder="Password"
                                    required
                                    onChange={onChange}
                                />
                                <a href="#">Forgot Password</a>
                            </div>
                            <button type="submit" onSubmit={submit}>
                                Login
                            </button>
                            <p className="bottomText">
                                Don't have an Account yet?{" "}
                                <a href="/signUp" className="formLink">
                                    Create Account
                                </a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

