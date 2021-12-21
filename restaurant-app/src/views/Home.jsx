import React from "react";
import "bootstrap";
import '../App.css';
import Navbar from "../components/Navbar";
import { isMobile } from 'react-device-detect';
import { Link } from "react-router-dom";



const Home = () => {

    if (!isMobile) {
        return (
            <div className="pt-3 row">
                <Navbar />
                <div className="header_video">
                    <div className="overlay" />

                    <video autoPlay loop muted id='video'>
                        <source src="../img/landing-page-video.mp4" type="video/mp4" />
                    </video>
                    <div className="container h-100">
                        <div className="d-flex h-100 text-center align-items-center">
                            <div className="w-100 text-white"><h1 className="display-3">Welcome to our restaurant!</h1>
                                <p className="lead-home mb-0">If you are a client, then enter the number of the table you are currently sitting in so you can take a look at our menu.
                                </p>
                                <p className="lead-home pt-5 mt-5">
                                    <Link className="btn btn-secondary" to="/client-login">I already have a table</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="pt-3 row">
                <Navbar />
                <div className="header_video">
                    <div className="overlay" />
                    <div className="video_contain_mobile"><video autoPlay loop muted id='video' className="video_mobile">
                        <source src="../img/landing-page-mobile.mp4" type="video/mp4" />
                    </video></div>

                    <div className="container h-100">
                        <div className="d-flex h-100 text-center align-items-center">
                            <div className="w-100 text-white"><h1 className="display-3">Welcome to our restaurant!</h1>
                                <p className="lead-home mb-0">If you are a client, then enter the number of the table you are currently sitting in so you can take a look at our menu.
                                </p>
                                <p className="lead-home pt-5 mt-5">
                                    <Link className="btn btn-light btn-lg" to="/client-login">I already have a table</Link>
                                </p>
                                <br/><br/><br/><br/><br/><br/>
                                <Link to="/login" className="text-light">I work here</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;