import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import persons from '../src/img/persons.jpg';
function Solutions() {
    return(
        <section className="solutions flex-columns">
            <div className="row">
                <div className="column">
                    <div className="column-1">
                        <img src={persons} alt=""/>
                    </div>
                </div>
                <div className="column bg-primary">
                    <div className="column-2">
                        <h4>What are you looking for?</h4>
                        <h2>We provide bespoke solutions</h2>
                        <p>Lorem ipsum dolor sit amet consectetur 
                            adipisicing elit. Ut dolore rem, dolorem 
                            itaque inventore molestiae neque nam 
                            magni repellendus animi.
                        </p>
                        <Link to="/about" className="btn btn-outline">
                            <FontAwesomeIcon icon={faChevronRight}/> Read More  
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Solutions;