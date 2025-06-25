import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Dashboard from "./pages/Dashboard/Dashboard";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About/About";

function App() {
  const [lightTheme, setLightTheme] = useState(true);

  const themeClass = lightTheme ? "text-dark bg-light" : "text-light bg-dark";

  return (
    <div className={`min-vh-100 ${themeClass}`}>
      <Header lightTheme={lightTheme} setLightTheme={setLightTheme} />
      <Routes>
        <Route path="/" element={<Dashboard lightTheme={lightTheme} />}></Route>
        <Route
          path="/about"
          element={<About lightTheme={lightTheme} />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
