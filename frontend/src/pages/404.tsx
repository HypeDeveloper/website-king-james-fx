import {NavBar, Footer } from "./Home"

export default function PageNotFound(){
    return(
        <>
        <NavBar/>
            <div className='NotFound'>
            <div className='NotFound-wrap'>
                <h1 className='bigText'>
                    404
                </h1>
                <p> The page your looking for is not found</p>
            </div>
            </div>
            <Footer/>
        </>
    )
}