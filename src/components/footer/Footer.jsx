import React from "react";
import {
    FaGithub,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentwrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                Presenting a project aimed at refining and spotlighting my React expertise, leveraging the API provided by TMDB. This endeavor serves as a platform to demonstrate proficiency in React development while harnessing the extensive data resources available through TMDB's API.
                </div>
                <div className="socialIcons">
                    <a href="https://github.com/manishjhacse" target="_blank" className="icon">
                        <FaGithub />
                    </a>
                    <a href="https://instagram.com/manish_j21" target="_blank" className="icon">
                        <FaInstagram />
                    </a>
                    <a href="https://twitter.com/manish_jha02" target="_blank" className="icon">
                        <FaTwitter />
                    </a>
                    <a href="https://linkedin.com/in/manish02" target="_blank" className="icon">
                        <FaLinkedin />
                    </a>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;