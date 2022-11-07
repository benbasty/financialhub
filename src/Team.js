function Team() {
    return(
        <section id="team" className="team section-padding">
            <header className="section-header">
                <h4>Who we are</h4>
                <h2>Our Professional Team</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, at?</p>
            </header>
            <div className="flex-items">
                <div className="column">
                    <img src="img/personone.jpg" alt=""/>
                    <h4>John Doe</h4>
                    <p>President</p>
                </div>
                <div className="column">
                    <img src="img/personthree.jpg" alt=""/>
                    <h4>Jane Doe</h4>
                    <p>Vice President</p>
                </div>
                <div className="column">
                    <img src="img/persontwo.jpg" alt=""/>
                    <h4>Steve Smith</h4>
                    <p>Marketing Head</p>
                </div>
            </div>
        </section>
    )
}
export default Team;