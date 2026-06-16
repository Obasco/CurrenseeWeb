import Navbar from "./Components/Navbar.jsx";
import Hero from "./Components/hero.jsx";
import About from "../src/Components/About.jsx";
import HowItWorks from "./Components/hiw.jsx";
import Footer from "./Components/footer.jsx";

const App = () => {
    return (
        <div>
            <Navbar/>
            <Hero/>
            <About/>
            <HowItWorks/>
            <Footer/>
        </div>
    )
}
export default App
