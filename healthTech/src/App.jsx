import { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Profiles from "./components/Profile";
import Benefits from "./components/Benefits";
import Action from "./components/Action";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-50 transition-colors duration-300">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <Hero />
        <Profiles />
        <Benefits />
        <Action />
      </main>
      <Footer />
    </div>
  );
}

export default App;
