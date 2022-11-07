import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import {Link} from "react-router-dom";
function Header() {
    return(
        <header className="hero">
            <div id="navbar" className="navbar">
                <h1 className="logo">
                    <FontAwesomeIcon icon={faBookOpen} /> <span className="text-primary">Finance</span>Hub
                </h1>
                <nav>
                    <ul>
                        
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/cases">Cases</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
            </div>
            <div className="content">
                <h1>The sky is the limit</h1>
                <p>We provide various types of financial assistance</p> 
                <Link to="/about" className="btn"><FontAwesomeIcon icon={faChevronRight} /> Read More</Link>
            </div>
        </header>
    )
}
export default Header;
