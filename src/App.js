import './App.css';
import { createContext, useState } from "react";
import Navbar from './pages/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Education from './pages/Education';
import Projects from './pages/Projects';
import Skills from './pages/Skills';

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <Navbar darkmode={
          <div class="form-switch switch">
            <input type="checkbox" id="toggle_checkbox"  onChange={toggleTheme} checked={theme === "dark"} />
            <label for="toggle_checkbox">
              <div id="star">
                <div class="star" id="star-1">★</div>
                <div class="star" id="star-2">★</div>
              </div>
              <div id="moon"></div>
            </label>
            {/* <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={toggleTheme} checked={theme === "dark"} />
            <label class="form-check-label" for="flexSwitchCheckDefault"></label> */}
          </div>
        } />

        <About />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
