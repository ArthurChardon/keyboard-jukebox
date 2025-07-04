import { Link } from "react-router-dom";
import "./Home.css";
import { useSongsContext } from "@/context/SongsContext";

function Home() {
  const { songs } = useSongsContext();

  return (
    <>
      <h2>Guessr</h2>
      {songs.map((song) => (
        <Link
          key={song.id}
          to={{ pathname: "/guessr", search: `?id=${song.id}` }}
        >
          {song.title}
        </Link>
      ))}
    </>
  );
}

export default Home;
