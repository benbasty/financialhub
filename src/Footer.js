import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin} from "@fortawesome/free-brands-svg-icons";

function Footer() {
    return(
        <footer id="footer" className="bg-dark">
            <div className="social">
                <Link href=""><FontAwesomeIcon icon={faFacebook} size={"2x"}/></Link>
                <Link href=""><FontAwesomeIcon icon={faTwitter} size={"2x"}/></Link>
                <Link href=""><FontAwesomeIcon icon={faYoutube} size={"2x"}/></Link>
                <Link href=""><FontAwesomeIcon icon={faLinkedin} size={"2x"}/></Link>
            </div>
        <p>Copyright &copy; 2022 EdjeLedger</p>
        </footer>
    )
}
export default Footer;