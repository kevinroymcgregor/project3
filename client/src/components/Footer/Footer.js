import React from "react";
import { Link } from "react-router-dom";
import '../Footer/Footer.css'

function Footer(props) {
    return (

        <footer className="page-footer">
            <div className="badgeWrapper">
                <div className="badge">
                    <img src="/jon.png" alt="jon"></img>
                    <div>
                        <p>Jonathan King</p>
                        <hr className="badgeHr"></hr>
                        <ul>
                            <li><a href="https://github.com/jonpking"><i class="fab fa-github fa-2x fa-fw"></i></a></li>
                            <li><a href="https://www.linkedin.com/in/jonpking314"><i class="fab fa-linkedin fa-2x fa-fw"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div className="badge">
                    <img src="/nathan.jfif" alt="nathan"></img>
                    <div>
                        <p>Nathan Benzor</p>
                        <hr className="badgeHr"></hr>
                        <ul>
                            <li><a href="https://github.com/n8benzor"><i class="fab fa-github fa-2x fa-fw"></i></a></li>
                            <li><a href="https://www.linkedin.com/in/nathanbenzor/"><i class="fab fa-linkedin fa-2x fa-fw"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div className="badge">
                    <img src="/kevin.jfif" alt="kevin"></img>
                    <div>
                        <p>Kevin McGregor</p>
                        <hr className="badgeHr"></hr>
                        <ul>
                            <li><a href="https://github.com/kevinroymcgregor"><i class="fab fa-github fa-2x fa-fw"></i></a></li>
                            <li><a href="https://www.linkedin.com/in/kevin-mcgregor-243001184/"><i class="fab fa-linkedin  fa-2x fa-fw"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div className="badge">
                    <img src="/christine.jfif" alt="christine"></img>
                    <div>
                        <p>Christine Treviranus</p>
                        <hr className="badgeHr"></hr>
                        <ul>
                            <li><a href="https://github.com/christytreviranus"><i class="fab fa-github fa-2x fa-fw"></i></a></li>
                            <li><a href="https://www.linkedin.com/in/ct-thedarkphoenix/"><i class="fab fa-linkedin fa-2x fa-fw"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container footer-logo center-align">
                RETRO-TRADE
                    <span style={{ color: "#fafafa", fontFamily: "Verdana, Geneva, Tahoma, sans-serif" }}> © 2019</span>
            </div>
        </footer>
    )
}

export default Footer;