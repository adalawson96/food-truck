import React from "react";
import { Routes, Route} from "react-router-dom";
import "./App.css";
import HomePage from "../HomePage/HomePage";
// import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";

const App = () => {
    return (

        <main className="App">
          {/* <NavBar /> */}
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
          <Footer />
        </main>
  
    );
  };
  
  export default App;


