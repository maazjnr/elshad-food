import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import Pages from "./pages/pages";


const App = () => {

  return(

    <div>
      <BrowserRouter>
      <Navbar />
      <Pages />
      </BrowserRouter>
    </div>
  )
}
export default App;
