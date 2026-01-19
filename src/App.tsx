import Footer from "./atoms/Footer";
import Intro from "./atoms/Intro";
import Navbar from "./atoms/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import ResumePage from "./components/ResumePage";
import Services from "./components/Services";
import Testimonials from "./components/Testimontials";

const App = () => {
  return (
    <div>
      <Navbar />
      <Intro /> 
      <About />
      <Testimonials />
      <ResumePage />
      <Projects />
      <Services />
      <Footer />
    </div>
  );
};

export default App;
