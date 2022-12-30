import { Outlet } from "react-router-dom";
import "../style/Admin.css";

import kingLogo from "../assets/img/kinglogo.png";
import { useRef, useState } from "react";
import { Auth, useAuth } from "../AuthManger/AuthContext";

export function Admin() {
    return (
        <>
            {/* <SignAdmin /> */}
            <AdminSection/>
        </>
    );
}


function SignAdmin() {
    const adSign:any = useRef()
    const { AuthToken }:Auth= useAuth();
    const [formData, setFormData] = useState({
        owner: '',
        token: '',
    })
    const { token, owner } = formData;
    const submit = (e: any) => {
        e.preventDefault()
        if (token === "" || owner === "") {
            alert("No token");
            return;
        }
        const tokenData = {
            owner: owner,
            token: token,
        };
        AuthToken ? AuthToken(tokenData).then(() => {
            adSign.current.style.display = 'none'
        }) : null;
    }
    const change = (e:any) => {
        setFormData((preData) => ({
            ...preData,
            [e.target.name] : e.target.value
        }))
    }
    return (
        <div className="adminSign sign" ref={adSign}>
            <div className="signWrap">
                <div className="admin SignIn">
                    <form action="" className="SignBox" onSubmit={submit}>
                        <h1 className="text">AdminSign In</h1>
                        <div className="wrapInput">
                            <input
                                type="text"
                                name="owner"
                                id="owner"
                                onChange={change}
                                placeholder="Administrator"
                            />
                        </div>
                        <div className="wrapInput">
                            <input
                                type="password"
                                name="token"
                                id="token"
                                onChange={change}
                                placeholder="Token"
                            />
                        </div>
                        <button type="submit">Log in</button>
                    </form>
                </div>
            </div>
        </div>
    );
}


function AdminSection(){
    return (
        <div className="Admin-sec">
            <div className="topperSec">
                <img src={kingLogo} alt="" />
                <p>active| Admin</p>
            </div>
            <div className="top-ad-sec">
                <div className="links">
                    <p  className="active">Users</p>
                </div>
                <div className="links">
                    <p >Transactions</p>
                </div>
                <div className="links">
                    <p >Packages</p>
                </div>
                <div className="links">
                    <p >Admins</p>
                </div>
                <div className="links">
                    <p >Settings</p>
                </div>
            </div>

        <AdminUsers/>
        </div>
    );
}

function AdminUsers() {
    return (
        <div className="users">
            <h1>Loged in Accounts</h1>

            <div className="LogWrap">

                <div className="userWrap">
                    <div className="info-user">
                        <div className="user-icon"></div>
                        <div className="user-info-ad">
                            <h1>Username</h1>
                            <p>email</p>
                        </div>
                    </div>
                    <div className="action-buttons">
                        <button className="del-user">Delete Account</button>
                    </div>
                </div>

            </div>
        </div>
    )
}