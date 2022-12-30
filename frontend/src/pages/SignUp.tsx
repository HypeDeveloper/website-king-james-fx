import { useEffect, useRef, useState } from "react";
import { NavBar } from "./Home"
import { Auth, useAuth } from "../AuthManger/AuthContext";
import { useNavigate } from "react-router-dom";

export function SignUp() {
    const FormOne:any = useRef()
    const FormThree: any = useRef();
    const [formData, setFormData] = useState({
        userName: "",
        fullName: "",
        email: "",
        country: "",
        password: "",
        confirmPassword: "",
        inviteCode:""
    });
    const { RegisterUser, isLoading, isSuccess, Reset }: Auth = useAuth();
    const navigate = useNavigate()
    useEffect(() => {
        if (isSuccess) {
            alert('Registered');
            Reset ? Reset(): null;
            navigate('/signIn')
            
        }
    }, [isSuccess]);
    useEffect(() => {
        FormThree.current.style.display = "none";
    },[])

    const {
        userName,
        fullName,
        email,
        password,
        country,
        confirmPassword,
        inviteCode,
    } = formData;
    
    const nextFormOne = () => {
        if (
            userName === "" ||
            fullName === "" ||
            email === "" ||
            country === ""
        ) {
            alert("missing a field");
            return
        }
        FormOne.current.style.display = "none";
        FormThree.current.style.display = "flex";
    };
    const submit = (e:any) => {
        e.preventDefault()

        if (password !== confirmPassword) {
            alert("Password does not match");
        }
        else {
            const userData = {
                fullname: fullName,
                username: userName,
                email: email,
                country: country,
                password: password,
                inviteRefCode: inviteCode,
            };
            RegisterUser? RegisterUser(userData) : null;
        }
    }
    
    const onChange = (e: any) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]:e.target.value
        }))
    }
    return (
        <>
            <NavBar />
            <div className="sign">
                <div className="signWrap">
                    <form onSubmit={submit}>
                        {/* First Form */}
                        <div className="SignUp" ref={FormOne}>
                            <div>
                                <h1>Create Account</h1>
                                <p>Fill in your details below</p>
                            </div>
                            <div className="SignBox">
                                <div className="splitForm">
                                    {/* Fullname */}
                                    <div className="wrapInput">
                                        <input
                                            type="text"
                                            name="fullName"
                                            id="FullName"
                                            placeholder="FullName"
                                            value={fullName}
                                            onChange={onChange}
                                            required
                                        />
                                    </div>
                                    {/* Username */}
                                    <div className="wrapInput">
                                        <input
                                            type="text"
                                            name="userName"
                                            id="UserName"
                                            placeholder="UserName"
                                            value={userName}
                                            onChange={onChange}
                                            required
                                        />
                                    </div>
                                    {/* email */}
                                    <div className="wrapInput">
                                        <input
                                            type="email"
                                            name="email"
                                            id="Email"
                                            placeholder="Email"
                                            value={email}
                                            onChange={onChange}
                                            required
                                        />
                                    </div>
                                    <div className="wrapInput">
                                        <input
                                            type="text"
                                            name="inviteCode"
                                            id="inviteCode"
                                            placeholder="ReferalCode [Optional]"
                                            value={inviteCode}
                                            onChange={onChange}
                                        />
                                    </div>
                                    {/* country */}
                                    <select
                                        name="country"
                                        onChange={onChange}
                                        id="CountryForm"
                                        value={country}
                                    >
                                        <option value="Select a Country">
                                            Select a Country
                                        </option>
                                        <option value="Nigeria">Uk</option>
                                        <option value="China">China</option>
                                        <option value="USA">USA</option>
                                        <option value="South Africa">
                                            South Africa
                                        </option>
                                    </select>
                                </div>
                                <button
                                    className="buttonForm"
                                    onClick={nextFormOne}
                                >
                                    Next
                                </button>
                                <p className="bottomText">
                                    Already you have an account in here?{" "}
                                    <a href="/signIn" className="formLink">
                                        Sign In
                                    </a>
                                </p>
                            </div>
                        </div>

                        

                        {/* Third Form */}
                        <div className="SignUp" ref={FormThree}>
                            <h1>Secure Your Account</h1>
                            <p>Setup a strong password for your account</p>
                            <div className="SignBox">
                                <div className="splitWrap">
                                    <div className="splitForm">
                                        {/* Passwords */}
                                        <div className="wrapInput">
                                            <input
                                                type="password"
                                                name="password"
                                                id="Password"
                                                required
                                                onChange={onChange}
                                                placeholder="Password"
                                            />
                                        </div>
                                        <div className="wrapInput lastPassword">
                                            <input
                                                type="password"
                                                name="confirmPassword"
                                                id="validatePassword"
                                                onChange={onChange}
                                                placeholder="Confirm Password"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                                <button
                                    className="buttonForm"
                                    type="submit"
                                    onSubmit={submit}
                                >
                                    Register
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
