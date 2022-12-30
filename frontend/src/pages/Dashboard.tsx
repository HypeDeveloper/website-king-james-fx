import { Outlet, useNavigate } from "react-router-dom";
import "../style/Dashboard.css";

import kingLogo from "../assets/img/kinglogo.png";
import { useEffect, useRef, useState } from "react";
import { authService } from "../AuthManger/AuthService";
import { Auth, useAuth } from "../AuthManger/AuthContext";

export function Dashboard() {
    const [data, setData] = useState()
    const nav = useNavigate();


    useEffect(() => {
        console.log(authService.getLogedInUser());
        authService.getLogedInUser()
            ? (setData(authService.getLogedInUser()))
            : nav("/signIn");

        

    }, [[], authService.getLogedInUser()]);


    

    return (
        <>
            <div className="dashBoard">
                <DashBoardNav />
                <div className="dashDisplay">
                    <div className="DD-top">
                        <div className="DD-texts">
                            <p>Welcome back,</p>
                            <h1>{authService.getLogedInUser().fullName}</h1>
                        </div>
                        <div className="others">
                            <div className="search-DD">
                                <div className="icon-DD">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="26"
                                        height="26"
                                        preserveAspectRatio="xMidYMid meet"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="m19.6 21l-6.3-6.3q-.75.6-1.725.95Q10.6 16 9.5 16q-2.725 0-4.612-1.887Q3 12.225 3 9.5q0-2.725 1.888-4.613Q6.775 3 9.5 3t4.613 1.887Q16 6.775 16 9.5q0 1.1-.35 2.075q-.35.975-.95 1.725l6.3 6.3ZM9.5 14q1.875 0 3.188-1.312Q14 11.375 14 9.5q0-1.875-1.312-3.188Q11.375 5 9.5 5Q7.625 5 6.312 6.312Q5 7.625 5 9.5q0 1.875 1.312 3.188Q7.625 14 9.5 14Z"
                                        />
                                    </svg>
                                </div>

                                <input type="text" placeholder="Search" />
                            </div>
                            <div className="users">
                                <div className="icon-DD userIcon">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="25"
                                        height="25"
                                        preserveAspectRatio="xMidYMid meet"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            fill="white"
                                            d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4Z"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Outlet />
                </div>
            </div>
        </>
    );
}

function DashBoardNav() {
    const [activeUrl, setActiveUrl] = useState(" ");
    const nav = useNavigate();

    useEffect(() => {
        setActiveUrl(document.location.href.split("/")[4]);
        console.log(document.location.href.split("/"));
    }, []);
    function logoutHandle() {
        authService.logout();
        nav("/signIn");
    }
    return (
        <>
            <div className="DashNavWrap">
                <img src={kingLogo} alt="" />
                <div className="links-DD">
                    <a href="/dashboard/">
                        <div
                            className={`dd-button ${
                                activeUrl === " "
                                    ? "acitve"
                                    : document.location.href.split("/")[3] ===
                                      "dashboard"
                                    ? "active"
                                    : ""
                            }`}
                        >
                            <div className="box-DD">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="25"
                                    height="25"
                                    preserveAspectRatio="xMidYMid meet"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill="white"
                                        d="M13 8V4q0-.425.288-.713Q13.575 3 14 3h6q.425 0 .712.287Q21 3.575 21 4v4q0 .425-.288.712Q20.425 9 20 9h-6q-.425 0-.712-.288Q13 8.425 13 8ZM3 12V4q0-.425.288-.713Q3.575 3 4 3h6q.425 0 .713.287Q11 3.575 11 4v8q0 .425-.287.712Q10.425 13 10 13H4q-.425 0-.712-.288Q3 12.425 3 12Zm10 8v-8q0-.425.288-.713Q13.575 11 14 11h6q.425 0 .712.287q.288.288.288.713v8q0 .425-.288.712Q20.425 21 20 21h-6q-.425 0-.712-.288Q13 20.425 13 20ZM3 20v-4q0-.425.288-.713Q3.575 15 4 15h6q.425 0 .713.287q.287.288.287.713v4q0 .425-.287.712Q10.425 21 10 21H4q-.425 0-.712-.288Q3 20.425 3 20Zm2-9h4V5H5Zm10 8h4v-6h-4Zm0-12h4V5h-4ZM5 19h4v-2H5Zm4-8Zm6-4Zm0 6Zm-6 4Z"
                                    />
                                </svg>
                            </div>
                            Dashboard
                        </div>
                    </a>

                    <a href="/dashboard/packages">
                        <div
                            className={`dd-button ${
                                activeUrl === "packages" ? "acitve" : ""
                            }`}
                        >
                            <div className="box-DD">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="25"
                                    height="25"
                                    preserveAspectRatio="xMidYMid meet"
                                    viewBox="0 0 256 256"
                                >
                                    <path
                                        fill="white"
                                        d="M233.5 68.9c0-.1 0-.1-.1-.2a20.5 20.5 0 0 0-7.5-7.4l-88-49.5a20.1 20.1 0 0 0-19.6 0l-88 49.5a20 20 0 0 0-7.5 7.5h-.1a.3.3 0 0 1-.1.2a20 20 0 0 0-2.5 9.7v98.6a20.2 20.2 0 0 0 10.2 17.5l88 49.5a20.6 20.6 0 0 0 9 2.5h1.8a21.2 21.2 0 0 0 8.8-2.5l88-49.5a20.2 20.2 0 0 0 10.2-17.5V78.7a19.4 19.4 0 0 0-2.6-9.8ZM128.1 33.8l71.6 40.3l-22.5 12.7l-72.4-39.9Zm.9 80.4L56.7 73.9l23.5-13.2l72.5 40.1ZM44.1 94.4L117 135l-.7 80.6L44.1 175Zm96.2 121l.7-80.4l24.1-13.7v31.2a12 12 0 0 0 24 0v-44.8l23-13.1V175Z"
                                    />
                                </svg>
                            </div>
                            View Packages
                        </div>
                    </a>

                    <a href="/dashboard/transactions">
                        <div
                            className={`dd-button ${
                                activeUrl === "transactions" ? "acitve" : ""
                            }`}
                        >
                            <div className="box-DD">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="25"
                                    height="25"
                                    preserveAspectRatio="xMidYMid meet"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill="white"
                                        d="M20 2H10a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3Zm1 10a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1Zm-3.5-4a1.49 1.49 0 0 0-1 .39a1.5 1.5 0 1 0 0 2.22a1.5 1.5 0 1 0 1-2.61ZM16 17a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-4h1a1 1 0 0 0 0-2H3v-1a1 1 0 0 1 1-1a1 1 0 0 0 0-2a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-1a1 1 0 0 0-1-1ZM6 18h1a1 1 0 0 0 0-2H6a1 1 0 0 0 0 2Z"
                                    />
                                </svg>
                            </div>
                            Transactions
                        </div>
                    </a>

                    <a href="/dashboard/usersupport">
                        <div
                            className={`dd-button ${
                                activeUrl === "usersupport" ? "acitve" : ""
                            }`}
                        >
                            <div className="box-DD">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="25"
                                    height="25"
                                    preserveAspectRatio="xMidYMid meet"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        fill="white"
                                        d="M13 9.75a1.5 1.5 0 0 0-1.5-1.5h-7A1.5 1.5 0 0 0 3 9.75v.5c0 1.971 1.86 4 5 4c3.14 0 5-2.029 5-4v-.5Zm-9 0a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v.5c0 1.438-1.432 3-4 3s-4-1.562-4-3v-.5Zm6.75-5.25A2.75 2.75 0 0 0 5.695 3H4a.5.5 0 0 0-.5.5v2c0 .016 0 .031.002.046H3.5V6.5A1.5 1.5 0 0 0 5 8h.387a.613.613 0 1 0-.47-1.007A.5.5 0 0 1 4.5 6.5V6h.25c.297 0 .574-.087.807-.236A2.75 2.75 0 0 0 10.75 4.5Zm-4.5 0a1.75 1.75 0 1 1 3.5 0a1.75 1.75 0 0 1-3.5 0Zm-1 0a.5.5 0 0 1-.5.5H4.5V4h.75v.5Z"
                                    />
                                </svg>
                            </div>
                            Support
                        </div>
                    </a>

                    <a href="" onClick={logoutHandle}><div className="dd-button ">
                        <div className="box-DD">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="25"
                                preserveAspectRatio="xMidYMid meet"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="white"
                                    d="M6 2h9a2 2 0 0 1 2 2v1a1 1 0 0 1-2 0V4H6v16h9v-1a1 1 0 0 1 2 0v1a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"
                                />
                                <path
                                    fill="white"
                                    d="M16.795 16.295c.39.39 1.02.39 1.41 0l3.588-3.588a1 1 0 0 0 0-1.414l-3.588-3.588a.999.999 0 0 0-1.411 1.411L18.67 11H10a1 1 0 0 0 0 2h8.67l-1.876 1.884a.999.999 0 0 0 .001 1.411z"
                                />
                            </svg>
                        </div>
                        Logout
                    </div></a>
                </div>
            </div>
        </>
    );
}

export function DashBoardHome() {
    return (
        <>
            <div className="DB-Home">
                <div className="topSection-DB">
                    <div className="ammount-DD">
                        <p> Total Income</p>
                        <h1>@addAmount</h1>
                    </div>
                    <div className="referrals-DD">
                        <p>Total Referals</p>
                        <h1>@addReferals</h1>
                    </div>
                </div>
                <TransactionsBoard />
            </div>
        </>
    );
}

export function Packages() {
    return (
        <>
            <div className="DB-Home">
                <div className="topSection-DB">
                    <h2>Our Packages</h2>
                    <p></p>
                </div>
                Loading......
            </div>
        </>
    );
}

import location from "../assets/img/icons8-location-100.png";
import envelope from "../assets/img/icons8-circled-envelope-100.png";
import support from "../assets/img/icons8-24-hours-day-support-100 (1).png";
export function SupportDD() {
    return (
        <>
            <div className="DB-Home">
                <div className="topSection-DB">
                    <h1>Have any complains</h1>
                </div>

                <section className="contactgrid">
                    <div className="contact-grid-contain">
                        <div className="contact-grid-item">
                            <div className="contactgrid-item-logo">
                                {" "}
                                <img src={location} alt="" />
                            </div>
                            <div className="contactgrid-item-content-title">
                                Office Address
                            </div>
                            <div className="contactgrid-item-content">
                                Carmelite House, 50 Victoria Embankment, Temple,
                                London EC4Y 0DZ, United Kingdom
                            </div>
                        </div>
                        <div className="contact-grid-item">
                            <div className="contactgrid-item-logo">
                                {" "}
                                <img src={envelope} alt="" />
                            </div>
                            <div className="contactgrid-item-content-title">
                                Email Address
                            </div>
                            <div className="contactgrid-item-content">
                                Kingjamesfx63@gmail.com
                            </div>
                        </div>
                        <div className="contact-grid-item">
                            <div className="contactgrid-item-logo">
                                {" "}
                                <img src={support} alt="" />
                            </div>
                            <div className="contactgrid-item-content-title">
                                support
                            </div>
                            <div className="contactgrid-item-content">
                                Kingjamesfx63@gmail.com
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export function Transactions() {
    const [showPrompt, setShowPrompt] = useState(false);
    const [prompt, setPrompt] = useState({
        body: <></>,
        button: "",
    });

    const copyToBoard = () => {
        setShowPrompt((showPrompt) => false);
        alert("Address copied");
    };
    const closePrompt= () => {
        setShowPrompt((showPrompt) => false);
    }

    const handleBtcDeposit = () => {
        setShowPrompt((showPrompt) => !showPrompt);
        setPrompt({
            body: (
                <>
                    <h3 className="pp-header">To Deposit BTC</h3>{" "}
                    <p className="pp-text">Send Your Funds to the address</p>
                    <p className="pp-addr">{"bjkexxweei"}</p>
                </>
            ),
            button: "Ok, add Transaction",
        });
    };
    const handleETHDeposit = () => {
        setShowPrompt((showPrompt) => !showPrompt);
        setPrompt({
            body: (
                <>
                    <h3>To Deposit ETH</h3>{" "}
                    <p>Send Your Funds to the address</p>
                    <p>{ 'bjkexxweei' }</p>

                </>
            ),
            button: "Ok, add Transaction",
        });
    };
    const handleERC20Deposit = () => {
        setShowPrompt((showPrompt) => !showPrompt);
        setPrompt({
            body: (
                <>
                    <h3>To Deposit USDT ERC20</h3>{" "}
                    <p>Send Your Funds to the address</p>
                    <p>{ 'bjkexxweei' }</p>

                </>
            ),
            button: "Ok, add Transaction",
        });
    };
    const handleTRC20Deposit = () => {
        setShowPrompt((showPrompt) => !showPrompt);
        setPrompt({
            body: (
                <>
                    <h3>To Deposit USDT TRC20</h3>{" "}
                    <p>Send Your Funds to the address</p>
                    <p>{ 'bjkexxweei' }</p>

                </>
            ),
            button: "Ok, add Transaction",
        });
    };
    return (
        <>
            {showPrompt ? (
                <PromptOverlay
                    close={closePrompt}
                    click={copyToBoard}
                    msgTemplate={prompt.body}
                    clickMsg={prompt.button}
                />
            ) : (
                <></>
            )}

            <div className="DB-Home">
                <div className="topSection-DB">
                    <div className="ammount-DD">
                        <p> Total Income</p>
                        <h1>@add Amount</h1>
                    </div>
                </div>
                <div className="depositAddress">
                    <p>Would you like </p>
                    <div className="DA-wrap-button">
                        <button onClick={handleBtcDeposit}>
                            Deposit with BTC
                        </button>
                        <button onClick={handleETHDeposit}>
                            Deposit with ETH
                        </button>
                        <button onClick={handleERC20Deposit}>
                            Deposit with USDT ERC20
                        </button>
                        <button onClick={handleTRC20Deposit}>
                            Deposit with USDT TRC20
                        </button>
                    </div>
                </div>

                <TransactionsBoard />
            </div>
        </>
    );
}

function TransactionsBoard() {
    return (
        <div className="Transcations">
            <h2>Transfare History</h2>

            <div className="wrap-Tras">
                <div className="histories-Trans">
                    <div className="info-trans">
                        <div className="iconTrans"></div>
                        <div className="fullInfo-trans">
                            <p className="trans-header">Deposit</p>
                            <p className="status">pending</p>
                        </div>
                    </div>
                    <div className="otherInfo-trans">
                        <div className="users-trans-date">
                            <p>20th January 2022</p>
                        </div>
                    </div>
                </div>

                <div className="histories-Trans">
                    <div className="info-trans">
                        <div className="iconTrans"></div>
                        <div className="fullInfo-trans">
                            <p className="trans-header">Deposit</p>
                            <p className="status">pending</p>
                        </div>
                    </div>
                    <div className="otherInfo-trans">
                        <div className="users-trans-date">
                            <p>20th January 2022</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function PromptOverlay(props: {
    click: any;
    close: any;
    clickMsg: string;
    msgTemplate: JSX.Element;
}) {
    return (
        <>
            <div className="prompt" onClick={props.close}>
                <div className="pp-box">
                    <h1>
                        Hi, {authService.getLogedInUser().userData.fullname}
                    </h1>
                    <p>{props.msgTemplate || "body"}</p>
                    <button onClick={props.click}>
                        {props.clickMsg || "Ok"}
                    </button>
                </div>
            </div>
        </>
    );
}
