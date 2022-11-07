function Contact() {
    return(
        <section id="contact" className="contact flex-columns section-padding">
        <div className="row">
            <div className="column">
                <div className="column-1">
                    <img src="img/contact.jpg" alt=""/>
                </div>
            </div>
            <div className="column">
                <div className="column-2 bg-secondary">
                    <h2>Request Call-Back</h2>
                    <form action="" className="callback-form">
                        <div className="form-control">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" placeholder="Enter Name"/>
                        </div>
                        <div className="form-control">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" placeholder="Enter Email"/>
                            
                        </div>
                        <div className="form-control">
                            <label htmlFor="phone">Phone</label>
                            <input type="number" id="phone" name="phone" placeholder="Enter Phone"/>
                        </div>
                        <input type="submit" value="Send" id="submit" className="btn"/>
                    </form>
                    
                </div>

            </div>
        </div>
    </section>
    )
}
export default Contact;