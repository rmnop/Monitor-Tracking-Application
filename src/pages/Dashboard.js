import Nav from "../components/Nav"
import FloatingWidget from "../components/FloatingWidget"
import Footer from "../components/Footer"

export default function Dashboard()
{
    return (
        <div className="container">
            <Nav/>
            <FloatingWidget/>
            <Footer/>
        </div>
    );
};