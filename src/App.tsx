import React, { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Favorites from "./components/Favorites";

function App() {
  const [favorites, showFavorites] = useState(false);

  const goToFavorites = () => {
    showFavorites((prevPage) => (prevPage = true));
  };

  const showHome = () => {
    showFavorites((prevPage) => (prevPage = false));
  };

  return (
    <>
      <nav className="navbar bg-dark navbar-expand-lg" data-bs-theme="dark">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <button
                  className="nav-link active"
                  aria-current="page"
                  onClick={showHome}
                >
                  Home
                </button>
              </li>
              <li className="nav-item">
                <button className="nav-link active" onClick={goToFavorites}>
                  Favorites
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {favorites ? <Favorites /> : <Home />}
    </>
  );
}

export default App;
