import "./Playr.css";
import { useEffect, useState } from "react";
import { type GuessrSong } from "@/types/guessr.types";
import { useSongsContext } from "@/context/SongsContext";
import { useSearchParams } from "react-router-dom";
import Keyboard from "../Keyboard/Keyboard";
import { useKeyboardsContext } from "@/context/KeyboardsContext";
import GuessrValidatedNote from "../Guessr/GuessrValidatedNote/GuessrValidatedNote";

function Playr({}: {}) {
  const { songs } = useSongsContext();
  const [searchParams] = useSearchParams();
  const [songId, _] = useState(searchParams.get("id"));

  const { noteToKey } = useKeyboardsContext();

  const [gameSound, setGameSound] = useState<GuessrSong | null>(null);

  useEffect(() => {
    const song = songs.find((song) => song.id == songId) ?? null;
    if (!song) return;
    song.notes = song.notes.map((notes) =>
      notes.map((note) => ({ note: noteToKey(song.keyboardType, note.note) }))
    );

    setGameSound(song);
  }, [songs, songId]);

  return (
    <>
      <h2>{gameSound?.title}</h2>

      <div className="flex flex-col gap-[.5rem] mt-[2rem]">
        {gameSound?.notes.map((round, roundIndex) => (
          <div
            key={roundIndex}
            className="flex gap-[.75rem] w-full justify-center items-center"
          >
            {Array.from(round).map((note, index) =>
              note.note == " " ? (
                <div key={index + "-" + roundIndex}>-</div>
              ) : (
                <GuessrValidatedNote
                  key={index}
                  note={note.note}
                ></GuessrValidatedNote>
              )
            )}
          </div>
        ))}
      </div>
      <Keyboard keyboardType={gameSound?.keyboardType}></Keyboard>
    </>
  );
}

export default Playr;
