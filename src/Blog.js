import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import blog from '../src/img/blog.jpg'
function Blog() {
    return(
        <section id="blog" className="blog flex-columns flex-reverse">
            <div className="column">
                <img src={blog} alt=""/>
            </div>
            <div className="column column-2 bg-secondary">
                <h4>Nov 5, 2022</h4>
                <h2>Blog Post One</h2>
                <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Deserunt aliquam necessitatibus sequi numquam reprehenderit 
                    corporis laborum! Debitis exercitationem atque, hic, 
                    quaerat quibusdam aspernatur ipsam eveniet est 
                    saepe eos odio quisquam.
                </p>
                <Link to="/financialhub/blogpage" className="btn btn-outline">
                    <FontAwesomeIcon icon={faChevronRight} /> Read Our Blog
                </Link>
            </div>
        </section>
    )
}
export default Blog;