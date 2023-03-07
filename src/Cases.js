import cases1 from '../src/img/cases1.jpg'
import cases2 from '../src/img/cases2.jpg'
import cases3 from '../src/img/cases3.jpg'
import cases4 from '../src/img/cases4.jpg'
import cases5 from '../src/img/cases5.jpg'
import cases6 from '../src/img/cases6.jpg'
import cases7 from '../src/img/cases7.jpg'
import cases8 from '../src/img/cases8.jpg'
function Cases() {
    return(
        <section id="cases" className="cases flex-grid section-padding">
            <header className="section-header">
                <h4>This is what we do</h4>
                <h2>Business Cases</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, ex?</p>
            </header>
            <div className="row">
                <div className="column">
                    <img src={cases1} alt=""/>
                    <img src={cases2} alt=""/>
                </div>
                <div className="column">
                    <img src={cases3} alt=""/>
                    <img src={cases4} alt=""/>
                </div>
                <div className="column">
                    <img src={cases5} alt=""/>
                    <img src={cases6} alt=""/>
                </div>
                <div className="column">
                    <img src={cases7} alt=""/>
                    <img src={cases8} alt=""/>
                </div>
            </div>
        </section>
    )
}
export default Cases;