import { useEffect, useRef } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

// images and Icons
import menu from "../assets/img/icons8-menu-100.png";
import kingLogo from "../assets/img/kinglogo.png";
import cert from "../assets/img/cert04.png";
import ax2 from "../assets/img/ax2.png";
import sh7 from "../assets/img/sh7.png";
import sh6 from "../assets/img/sh6.png";
import investIcon from "../assets/img/icons8-investing-64.png";
import bull from "../assets/img/bullimage.png";
import support from "../assets/img/icons8-24-hours-day-support-100 (1).png";
import walletImg from "../assets/img/wallet-interest.png";
import mid from "../assets/img/mid001.png";
import hs5 from "../assets/img/hs5.png";
import sh8 from "../assets/img/sh8.png";
import { Auth, useAuth } from "../AuthManger/AuthContext";
import { authService } from "../AuthManger/AuthService";

export function Index() {
    return <Outlet />;
}

export function Home() {
    const {  user }: Auth = useAuth();
    const navigate = useNavigate();

    useEffect(()=>{
        if(authService.getLogedInUser() !== null){
            navigate('/dashboard')
        }
    },[user])
    return (
        <>
            <NavBar />
            <HomeBody />
            <Footer />
        </>
    );
}

function HomeBody() {
    return (
        <>
            <section className="body">
                <div className="hero">
                    <div className="herotext">
                        Fast Growing Blockchain Investment Platform
                    </div>
                    <div className="herobtn">
                        <div className="hbtn">
                            <a href="/signUp"> create account</a>
                        </div>
                        <div className="hbtn">
                            <a href="/signIn"> login</a>
                        </div>
                    </div>
                </div>
            </section>
            <div className="blockitem">
                <div className="blockitemcover">
                    <div className="itemblock">
                        <div className="blocklogo">
                            <img src={investIcon} alt="" />
                        </div>
                        <div className="blockcontent">
                            <div className="blockitemheader">
                                Industry best practices
                            </div>
                            <div className="blockitemtext">
                                kingjames FX supports a variety of the most
                                popular digital currencies.
                            </div>
                        </div>
                    </div>
                    <div className="itemblock">
                        <div className="blocklogo">
                            <img src={support} alt="" />
                        </div>
                        <div className="blockcontent">
                            <div className="blockitemheader">
                                Amazing Support
                            </div>
                            <div className="blockitemtext">
                                Powered by an amazing customer service
                            </div>
                        </div>
                    </div>
                    <div className="itemblock">
                        <div
                            className="cryptohopper-web-widget"
                            data-id="8"
                            data-theme="dark"
                            data-coins="bitcoin"
                        ></div>
                    </div>
                </div>
            </div>

            <script src="https://widgets.coingecko.com/coingecko-coin-price-marquee-widget.js"></script>
            <div className="divideblock">
                <div className="block1">
                    <img src={bull} width="75%" />
                </div>
                <div className="block2">
                    <div className="blockheader">
                        Focused, Active Management of High-Growth Digital
                        Assets.
                    </div>
                    <div className="blocktext">
                        king james FX is a registered investment platform
                        providing digital asset investment management services
                        to individuals. We provide a dynamic investment solution
                        to clients in need of a self-operating portfolio, as
                        well as a smart fund with flexible time and investment
                        amount.
                    </div>
                </div>
            </div>

            <div className="blockspace">
                <div className="blockspacegrid">
                    <div className="blockspacecontent">
                        <img src={hs5} alt="" />
                    </div>
                </div>
            </div>

            <div className="blockspace whitebg">
                <div className="blockspacegrid whitebg">
                    <div className="blockspacecontent">
                        <img src={mid} alt="" />
                    </div>
                </div>
            </div>

            <div className="investment">
                <div className="investitle"> investment plans</div>
                <div className="investmentgrid">
                    <div className="investmentplan">
                        <div className="greenblock">
                            <div className="plantitle">beginner plan</div>
                            <div className="planroi">10%</div>
                        </div>
                        <div className="planicon">
                            <img src={ax2} alt="" />
                        </div>
                        <div className="planprice">
                            <pre>min : $100 </pre>
                            <pre>min : $499 </pre>
                        </div>
                        <div className="planduration"> after 24 HOURS</div>
                    </div>
                    <div className="investmentplan">
                        <div className="greenblock">
                            <div className="plantitle">gold plan</div>
                            <div className="planroi">20%</div>
                        </div>
                        <div className="planicon">
                            <img src={ax2} alt="" />
                        </div>
                        <div className="planprice">
                            <pre>min : $500 </pre>
                            <pre>min : $4999 </pre>
                        </div>
                        <div className="planduration"> after 48 HOURS</div>
                    </div>
                    <div className="investmentplan">
                        <div className="greenblock">
                            <div className="plantitle">diamond plan</div>
                            <div className="planroi">30%</div>
                        </div>
                        <div className="planicon">
                            <img src={ax2} alt="" />
                        </div>
                        <div className="planprice">
                            <pre>min : $5000 </pre>
                            <pre>min : $19999 </pre>
                        </div>
                        <div className="planduration"> after 72 HOURS</div>
                    </div>
                    <div className="investmentplan">
                        <div className="greenblock">
                            <div className="plantitle">master's plan</div>
                            <div className="planroi">40%</div>
                        </div>
                        <div className="planicon">
                            <img src={ax2} alt="" />
                        </div>
                        <div className="planprice">
                            <pre>min : $20000 </pre>
                            <pre>min : Unlimited</pre>
                        </div>
                        <div className="planduration"> after 120 HOURS</div>
                    </div>
                </div>
            </div>

            <div className="divideblock">
                <div className="block2">
                    <div className="blockheader">
                        Build your savings without even trying.
                    </div>
                    <div className="blocktext">
                        Digital assets are a className of assets considered
                        dangerous and inconvenient. Many reasons such as
                        liquidity, money laundering accusation, uncertainty of
                        regulation, access restriction, volatile markets,
                        functionality inquiries reduce trust in these assets. We
                        believe that the risk factor should be eliminated for
                        all people who believe that finance will rise on
                        distributed systems.
                    </div>
                </div>

                <div className="block1 img4">
                    <img src={sh6} width="80%" />
                </div>
            </div>

            <div className="blockspace">
                <div className="blockspacegrid">
                    <div className="blockspacecontent">
                        <img src={sh7} alt="" />
                    </div>
                </div>
            </div>

            <div className="divideblock">
                <div className="block1">
                    <img src={walletImg} width="75%" />
                </div>
                <div className="block2">
                    <div className="blockheader">
                        Diversify your investment porfolio
                    </div>
                    <div className="blocktext">
                        Aspirefunds is fully legit and officially registered
                        company whose activities are regulated by the financial
                        control authorities. Accepting our terms of
                        coorperation, you can be absolutely sure of getting a
                        guaranteed profit and full return on your investment.
                    </div>
                </div>
            </div>

            <div className="video">
                <video
                    autoPlay
                    controls
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    width="100%"
                    height="auto"
                    style={{
                        border: "4px solid #ebb112",
                    }}
                >
                    <source
                        src="https://coin-ventures.co/video/bit.mp4"
                        type="video/mp4"
                    />
                </video>
            </div>

            <div className="blockspace">
                <div className="blockspacegrid">
                    <div className="blockspacecontent">
                        <img src={sh8} alt="" />
                    </div>
                </div>
            </div>

            <div className="divideblock">
                <div className="block1 btcspace"></div>
                <div className="block2">
                    <div className="blockheader">
                        A Platform for Business and Investment
                    </div>
                    <div className="blocktext">
                        This platform has been consistent in maximizing profits
                        and making customer satisfaction a priority. The board
                        of the company has a common goal which is expanding its
                        brand across a global stage. And with maximum
                        cooperation and investor interests all will be achieved
                        in due time. This platform is a tested and trusted
                        platform.
                    </div>
                </div>
            </div>

            <div className="testimonial">
                <div className="theader">Hear our amazing testimonials</div>
                <div className="testimonialgrid">
                    <div className="testimonialitem">
                        <div className="testblocktop">
                            <div className="testimg timg1"></div>
                            <div className="testname"> thomas</div>
                        </div>
                        <div className="testblockcontent">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Tempora magni laboriosam cupiditate provident
                            debitis corporis expedita porro veniam eaque vel.
                        </div>
                    </div>
                    <div className="testimonialitem">
                        <div className="testblocktop">
                            <div className="testimg timg3"></div>
                            <div className="testname"> mary.j</div>
                        </div>
                        <div className="testblockcontent">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Tempora magni laboriosam cupiditate provident
                            debitis corporis expedita porro veniam eaque vel.
                        </div>
                    </div>
                    <div className="testimonialitem">
                        <div className="testblocktop">
                            <div className="testimg timg2"></div>
                            <div className="testname"> jonah smith</div>
                        </div>
                        <div className="testblockcontent">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Tempora magni laboriosam cupiditate provident
                            debitis corporis expedita porro veniam eaque vel.
                        </div>
                    </div>
                </div>
            </div>

            <div className="divideblock whitebg">
                <div className="block2">
                    <div className="blockheader whitebg">
                        Commitment to Security
                    </div>
                    <div className="blocktext whitebg">
                        We strives to be worthy of our client's trust by
                        providing them with services which are economically
                        beneficial to them and to create awareness regarding
                        reliable and highly profitable investment platform among
                        our clients around the globe. All you need to do is sit
                        back and enjoy how your profit grows on a daily.
                    </div>
                </div>

                <div className="block1 img4">
                    <img src={cert} width="100%" />
                </div>
            </div>
        </>
    );
}
export function NavBar() {
    const navId: any = useRef();

    function openNav() {
        navId.current.style.width = "100%";
    }
    function closeNav() {
        navId.current.style.width = "0%";
    }
    return (
        <>
            <div ref={navId} id="myNav" className="overlay">
                {/* <!-- Button to close the overlay navigation --> */}
                <a
                    // href="javascript:void(0)"
                    className="closebtn"
                    onClick={closeNav}
                >
                    &times;
                </a>

                {/* <!-- Overlay content --> */}
                <div className="overlay-content">
                    <Link to={"/"}>home</Link>
                    <Link to={"/about"}>aboutus</Link>
                    <Link to={"/support"}>support</Link>
                    <Link to={"/signIn"}>login</Link>
                </div>
            </div>

            {/* Second Nav */}
            <div className="header">
                <div className="logo">
                    {" "}
                    <img src={kingLogo} alt="" />
                </div>
                <div className="navlink">
                    <ul>
                        <li>
                            {" "}
                            <a href="/"> home</a>
                        </li>
                        <li>
                            {" "}
                            <a href="/about"> aboutus</a>
                        </li>
                        <li>
                            {" "}
                            <a href="/support"> support</a>
                        </li>
                        <li>
                            {" "}
                            <a href="/signIn"> login</a>
                        </li>
                    </ul>
                </div>
                <div className="hamburger" onClick={openNav}>
                    <img src={menu} />
                </div>
            </div>
        </>
    );
}
export function Footer() {
    return (
        <>
            <div className="footer">
                <div className="footercontainer">
                    <div className="aboutcompany">
                        <div className="fheader"> About company</div>
                        <div className="fline"></div>
                        <div className="fcontainer">
                            Address: Carmelite House, 50 Victoria Embankment,
                            Temple, London EC4Y 0DZ, United Kingdom <br />
                            Email: Kingjamesfx63@gmail.com <br />
                        </div>
                    </div>

                    <div className="usefullink">
                        <div className="fheader"> useful links</div>
                        <div className="fline"></div>
                        <div className="fcontainer">
                            <div className="flink">
                                {" "}
                                <a href=""> home</a>{" "}
                            </div>
                            <div className="flink">
                                {" "}
                                <a href=""> login</a>{" "}
                            </div>
                            <div className="flink">
                                {" "}
                                <a href=""> signup</a>{" "}
                            </div>
                        </div>
                    </div>
                    <div className="company">
                        <div className="fheader"> company </div>
                        <div className="fline"></div>
                        <div className="fcontainer">
                            <div className="flink">
                                {" "}
                                <a href="/about"> about us</a>{" "}
                            </div>
                            <div className="flink">
                                {" "}
                                <a href="/"> contact us</a>{" "}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

{
    /* <coingecko-coin-price-marquee-widget 
                            coin-ids="bitcoin,eos,ethereum,litecoin,ripple,binancecoin,polkadot,chainlink" currency="usd"
                            background-color="#121212" locale="en" font-color="#f8f7f7">
                        </coingecko-coin-price-marquee-widget> */
}
