import { Routes, Route } from "react-router-dom";
import Home from "../components/home";
import About from "../components/about";
import Contact from "../components/contact";
import Recipe from "../components/recipe";
import Searched from '../components/searched';

const Pages = () => {

    return(
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/searched/:search" element={<Searched />} />
                <Route path="recipe/:name" element={ <Recipe />} />
            </Routes>
        </div>
    )
}

export default Pages