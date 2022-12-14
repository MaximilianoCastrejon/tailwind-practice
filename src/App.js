import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { StrictMode } from "react";
import Trees from "./components/Trees";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Trees></Trees>
      <Footer></Footer>
    </div>
  );
}

export default App;
