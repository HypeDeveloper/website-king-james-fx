import {NavBar,Footer } from "./Home"
import location from "../assets/img/icons8-location-100.png"
import envelope from "../assets/img/icons8-circled-envelope-100.png"
import support from "../assets/img/icons8-24-hours-day-support-100 (1).png"

export function About(){
    return(
        <>
        <NavBar/>

            <section className="herotitlesectionblock">
        <div className="herotitlesectionblockpage">
            about US
        </div>
    </section>

    <section className="aboutussection">
        <div className="aboutusheader">
            <div className="aboutusheaderbig">Who we are & What we do</div>
        </div>
        <div className="aboutuscontent">
            kingjamesFX.com is a registered digital asset investment firm based in the UK. The platform, which includes
            advanced basic and technical analysis at the source of high return performance, offers high & fixed interest
            return. Aiming for success with its international investor network, experienced team, privileged information
            from business and technology world; Bynamic stands out from its competitors with its proven quality and ease
            of use. The company, which is managed under the leadership of people who think and foresee the future, is
            committed to achieving high returns from well-diversified portfolios and prioritizing clients.

            Digital assets are a className of assets considered dangerous and inconvenient. Many reasons such as liquidity,
            money laundering accusation, uncertainty of regulation, access restriction, volatile markets, functionality
            inquiries reduce trust in these assets. We believe that the risk factor should be eliminated for all people
            who believe that finance will rise on distributed systems. That's why we offer high interest returns to
            platform investors. With careful and detailed examination of market conditions, daily trading volume,
            expectations; we change our portfolio distribution and adjust our investment strategy. With this active fund
            management, you enjoy the fixed interest rate return on the user side.

            Successful investment management companies base their business on a core investment philosophy, and Bynamic
            is no different. Although we offer innovative and specific strategies through digital asset funds, an
            overarching theme runs through the investment guidance we provide to clients— focus on those things within
            your control. There are basically four principles that we attach great importance to:

            sound investment strategy starts with an asset allocation befitting the portfolio's objective. The
            allocation should be built upon reasonable expectations for risk and returns and use diversified investments
            to avoid exposure to unnecessary risks.
        </div>
    </section>
    <Footer/>
        </>
    )
}

export function Support(){
    return(
        <>
        <NavBar/>
        <section className="herotitlesectionblock">
        <div className="herotitlesectionblockpage">
            contact US
        </div>
    </section>

    <section className="contactgrid">
        <div className="contact-grid-contain">
            <div className="contact-grid-item">
                <div className="contactgrid-item-logo"> <img src={location} alt=""/></div>
                <div className="contactgrid-item-content-title">Office Address</div>
                <div className="contactgrid-item-content">
                    Carmelite House, 50 Victoria Embankment,
                    Temple, London EC4Y 0DZ, United Kingdom</div>
            </div>
            <div className="contact-grid-item">
                <div className="contactgrid-item-logo"> <img src={envelope} alt=""/>
                </div>
                <div className="contactgrid-item-content-title">Email Address</div>
                <div className="contactgrid-item-content">
                    Kingjamesfx63@gmail.com</div>
            </div>
            <div className="contact-grid-item">
                <div className="contactgrid-item-logo"> <img src={support}
                        alt=""/></div>
                <div className="contactgrid-item-content-title">support</div>
                <div className="contactgrid-item-content">
                    Kingjamesfx63@gmail.com</div>
            </div>
        </div>
    </section>
    <Footer/>

        </>
    )
}