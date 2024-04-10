import Nav from "../components/Nav"
import FloatingWidget from "../components/FloatingWidget"
import Footer from "../components/Footer"

export default function Dashboard()
{
    const f = new FloatingWidget()
    //f.setRender()
    //f.handleShow()
    return (
        <div className="container">
            <Nav/>
            {f.render()}
            <Footer/>
        </div>
    );
};