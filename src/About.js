import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuildingColumns } from "@fortawesome/free-solid-svg-icons";
import { faBookOpenReader } from "@fortawesome/free-solid-svg-icons";
import { faSquarePen } from "@fortawesome/free-solid-svg-icons";
function About() {
    return(
        <section id="about" className="icons">
            <div className="flex-items">
                <div>
                    <FontAwesomeIcon icon={faBuildingColumns} size={"2x"} className="fontIcon"/>
                    {/* <i className="fa-solid fa-building-columns fa-2xl"></i> */}
                    <div>
                        <h3>Investment Banking</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Voluptatum voluptates corrupti atque saepe harum laborum.
                        </p>
                    </div>
                </div>
                <div>
                <FontAwesomeIcon icon={faBookOpenReader} size={"2x"} className="fontIcon"/>
                    {/* <i classname="fa-solid fa-book-open-reader fa-2xl"></i> */}
                    <div>
                        <h3>Portfolio Manager</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Voluptatum voluptates corrupti atque saepe harum laborum.
                        </p>
                    </div>
                </div>
                <div>
                <FontAwesomeIcon icon={faSquarePen} size={"2x"} className="fontIcon"/>
                    {/* <i classname="fa-solid fa-square-pen fa-2xl"></i> */}
                    <div>
                        <h3>Tasks and Custodial</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Voluptatum voluptates corrupti atque saepe harum laborum.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About;