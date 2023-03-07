import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import {Link} from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
function Header() {
    return(
        <header className="hero">
            <div id="navbar" className="navbar">
                <h1 className="logo">
                    <FontAwesomeIcon icon={faBookOpen} /> <span className="text-primary">Finance</span>Hub
                </h1>
                <nav>
                    <ul>

                        <li><HashLink smooth to="/financialhub/#">Home</HashLink></li>
                        <li><HashLink smooth to="/financialhub/#about">About</HashLink></li>
                        <li><HashLink smooth to="/financialhub/#cases">Cases</HashLink></li>
                        <li><HashLink smooth to="/financialhub/#blog">Blog</HashLink></li>
                        <li><HashLink smooth to="/financialhub/#contact">Contact</HashLink></li>
                    </ul>
                </nav>
            </div>
            <div className="content">
                <h1>The sky is the limit</h1>
                <p>We provide various types of financial assistance</p>
                <Link to="about" className="btn"><FontAwesomeIcon icon={faChevronRight} /> Read More</Link>
            </div>
        </header>
    )
}
export default Header;
