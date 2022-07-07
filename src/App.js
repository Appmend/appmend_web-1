import Home from "./Home";
import Content from "./components/Content";
import Section2 from "./Section2";
import Footer from "./components/footer"
import "./App.css"
import Steps from "./components/Steps";
import Testimonial from "./components/Testimonial";
import Manage from "./components/Manage";
import Navbar from "./components/Navbar";
import Install from "./components/install";
import InstallSecond from "./components/Install2";
function App() {
  return (
    <>
    <Home/>
    <Install/>
    <InstallSecond/>
    <Footer/>
      {/*
      <Section2/>
      <Steps/>
      <Testimonial/>
      <Manage/>
       */}
    </>
  );
}

export default App;
