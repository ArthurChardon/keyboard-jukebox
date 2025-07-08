import { Link } from "react-router-dom";
import "./Home.css";
import { useSongsContext } from "@/context/SongsContext";

function Home() {
  const { songs } = useSongsContext();

  return (
    <>
      <div className="flex flex-col justify-center pt-[2rem]">
        <h2 className="game-home-title">Guessr</h2>
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
      </div>
    </>
  );
}

export default Home;
