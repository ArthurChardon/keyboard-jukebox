import { Link } from "react-router-dom";
import "./Home.css";
import { useSongsContext } from "@/context/SongsContext";

function Home() {
  const { songs } = useSongsContext();

  return (
    <>
      <div className="flex flex-col justify-center pt-[2rem]">
        <div className="flex items-center gap-[5rem] mb-[2rem]">
          <h2 className="game-home-title">Guessr</h2>
          <p className="tagline">Deviner les notes</p>
        </div>
        <div className="guessr-songs">
          {songs.map((song) => (
            <Link
              key={song.id}
              className="guessr-song truncate"
              to={{ pathname: "/guessr", search: `?id=${song.id}` }}
            >
              {song.title}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-[5rem] my-[2rem]">
          <h2 className="game-home-title">Playr</h2>
          <p className="tagline">Jouer les morceaux</p>
        </div>
        <div className="guessr-songs">
          {songs.map((song) => (
            <Link
              key={song.id}
              className="guessr-song truncate"
              to={{ pathname: "/playr", search: `?id=${song.id}` }}
            >
              {song.title}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
