import Footer from "./atoms/Layout/Footer";
import Intro from "./atoms/Intro/Intro";
import Navbar from "./atoms/Layout/Navbar";

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
