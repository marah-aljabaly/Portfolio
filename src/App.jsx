import "./App.css";
import About from "./components/About/About.jsx";
import { Contact } from "./components/Contact/Contact.jsx";
import Experience from "./components/Experience/Experience.jsx";
import Hero  from "./components/Hero/Hero.jsx";
import Navbar  from "./components/Navbar/Navbar.jsx";
import Projects from "./components/Projects/Projects.jsx";
import ScrollToTopButton  from "./components/backToTopBtn/ScrollToTopButton.jsx";
import { useSelector} from 'react-redux';

function App() {
  const theme = useSelector((state) => state.theme.value);
  return (
      <div className={`App ${theme}`}>
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <ScrollToTopButton />
      </div>
  );
}

export default App;
