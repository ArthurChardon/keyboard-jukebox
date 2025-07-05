import { Routes, Route, Link, useLocation } from "react-router-dom";
import "./App.css";
import Guessr from "./components/Guessr/Guessr";
import Home from "./components/Home/Home";
import { SongsContextProvider } from "./context/SongsContext";
import { Piano, Play, Trophy } from "lucide-react";
import { useEffect, useState } from "react";
import FreePlay from "./components/FreePlay/FreePlay";

function App() {
  let location = useLocation();
  const [headerTitle, setHeaderTitle] = useState(<h1></h1>);

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setHeaderTitle(
          <h1
            aria-label="Jukebox Keyboard"
            className="home--title leading-none w-fit h-fit text-center"
          >
            <div className="home--title--segment">Jukebox</div>
            <div className="home--title--segment ml-[1.5rem]">Keyboard</div>
          </h1>
        );
        break;

      case "/guessr":
        setHeaderTitle(
          <h1 className="guessr--title leading-none w-fit h-fit text-center">
            Guessr
          </h1>
        );
        break;
    }
  }, [location]);

  return (
    <>
      <SongsContextProvider>
        <header className="header">
          {headerTitle}
          <nav>
            <Link to={{ pathname: "/" }}>
              <Play width={40} height={40}></Play>
            </Link>
            <Link to={{ pathname: "/free" }}>
              <Piano width={40} height={40}></Piano>
            </Link>
            <Link to={{ pathname: "/" }}>
              <Trophy width={40} height={40}></Trophy>
            </Link>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/guessr" element={<Guessr />} />
          <Route path="/free" element={<FreePlay />} />
        </Routes>
      </SongsContextProvider>
    </>
  );
}

export default App;
