import "./Guessr.css";
import { useEffect, useRef, useState } from "react";
import {
  type GuessrSongNote,
  type GuessrSong,
  NoteResult,
  Phase,
} from "@/types/guessr.types";
import GuessrValidatedNote from "./GuessrValidatedNote/GuessrValidatedNote";
import { CountdownProgress } from "../ui/countdown-progress";
import { useSongsContext } from "@/context/SongsContext";
import { useSearchParams } from "react-router-dom";
import Keyboard from "../Keyboard/Keyboard";
import GuessrNote from "./GuessrNote/GuessrNote";
import { useKeyboardsContext } from "@/context/KeyboardsContext";

function Guessr({}: {}) {
  const { songs } = useSongsContext();
  const [searchParams] = useSearchParams();
  const [songId, setSongId] = useState(searchParams.get("id"));

  const { keyboards, keyToNote, noteToKey } = useKeyboardsContext();

  const computeSkipper = (direction: "up" | "down", index: number): number => {
    let skipper = 0;
    if (direction === "down") {
      while (
        index > skipper + 1 &&
        (triesSound[index - 1 - skipper].note == " " ||
          triesSound[index - 1 - skipper].note == "-")
      ) {
        skipper += 1;
      }
      return skipper;
    }
    if (direction === "up") {
      while (
        index + 1 + skipper < triesSound.length &&
        (triesSound[index + 1 + skipper].note == " " ||
          triesSound[index + 1 + skipper].note == "-")
      ) {
        skipper += 1;
      }
      return skipper;
    }
    return 0;
  };

  const [gameSound, setGameSound] = useState<GuessrSong | null>(null);
  const [roundIndex, setRoundIndex] = useState(0);
  const [roundSound, setRoundSound] = useState<GuessrSongNote[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [validatedRoundSound, setValidatedRoundSound] = useState<string[]>([]);
  const [keyboard, setKeyboard] = useState<any>(null);

  const [triesSound, setTriesSound] = useState<
    { note: string | null; result: NoteResult | null }[]
  >([]);

  const [phase, setPhase] = useState(Phase.LOAD);

  const submitInput = useRef<HTMLInputElement>(null);

  let displayRoundWinPhase = false;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "Enter":
          setPhase(Phase.SUBMIT);
          return;

        case "Home":
          setCurrentIndex(0);
          return;

        case "End":
          setCurrentIndex(triesSound.length - 1);
          return;

        case "ArrowRight":
          setCurrentIndex((index) =>
            Math.min(
              index + computeSkipper("up", index) + 1,
              triesSound.length - 1
            )
          );
          e.preventDefault();
          return;

        case "ArrowLeft":
          setCurrentIndex((index) =>
            Math.max(index - computeSkipper("down", index) - 1, 0)
          );
          e.preventDefault();
          return;
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [triesSound]);

  useEffect(() => {
    setKeyboard(gameSound ? keyboards[gameSound.keyboardType] : null);
  }, [keyboards, gameSound]);

  useEffect(() => {
    setGameSound(songs.find((song) => song.id == songId) ?? null);
    setPhase(Phase.GUESS);
  }, [songs, songId]);

  useEffect(() => {
    if (!gameSound) return;
    setRoundSound(
      roundIndex < gameSound.notes.length
        ? gameSound.notes[roundIndex].map((songNote) => ({
            note: noteToKey(gameSound.keyboardType, songNote.note),
            given: songNote.given,
          }))
        : []
    );

    if (phase === Phase.WIN_GAME) {
      setRoundSound([]);
    }
  }, [roundIndex, gameSound]);

  useEffect(() => {
    setTriesSound(
      Array.from({ length: roundSound.length }, (v, k) => ({
        note:
          roundSound[k].note == " "
            ? " "
            : roundSound[k].given
              ? roundSound[k].note
              : null,
        result: roundSound[k].given ? NoteResult.CORRECT : null,
      }))
    );
    setCurrentIndex(0);
  }, [roundSound]);

  if (phase === Phase.LOAD) return <div>LOADING</div>;

  const inputEmitted = (index: number, key: string) => {
    if (key === "DELETE") {
      const skipper = computeSkipper("down", index);
      setCurrentIndex(index - 1 - skipper);
      removeNoteAtIndex(index);
      return;
    }
    const tempTriesSound = [...triesSound];
    tempTriesSound[index].note = key;

    setTriesSound(tempTriesSound);
    const skipper = computeSkipper("up", index);

    setCurrentIndex(index + 1 + skipper);
    if (index + 1 >= triesSound.length) {
      submitInput.current?.focus();
      setPhase(Phase.SUBMIT);
    }
  };

  const focusGuessrNote = (index: number) => {
    setCurrentIndex(index);
  };

  const submitTriesSound = () => {
    setPhase(Phase.GUESS);
    const tempTriesSound = [...triesSound];
    for (let i = 0; i < triesSound.length; i++) {
      tempTriesSound[i].result =
        triesSound[i].note === roundSound[i].note
          ? NoteResult.CORRECT
          : NoteResult.WRONG;
    }

    if (
      !tempTriesSound
        .map((trySound) => trySound.result)
        .includes(NoteResult.WRONG)
    ) {
      setPhase(Phase.WIN);
      return;
    }
    setTriesSound(tempTriesSound);
  };

  const removeNoteAtIndex = (index: number) => {
    const triesSoundTemp = [...triesSound];
    triesSoundTemp[index].note = null;
    setTriesSound(triesSoundTemp);
  };

  const nextRound = () => {
    if (!gameSound) return;

    setValidatedRoundSound([
      ...validatedRoundSound,
      roundSound.map((sound) => sound.note).join(""),
    ]);
    setRoundIndex((index) => index + 1);
    if (roundIndex + 1 === gameSound.notes.length) {
      setPhase(Phase.WIN_GAME);
      return;
    }
    setPhase(Phase.GUESS);
  };

  if (phase === Phase.SUBMIT) {
    submitTriesSound();
  }

  if (phase === Phase.WIN) {
    displayRoundWinPhase = true;
    nextRound();
  }

  if (phase === Phase.WIN_GAME) {
  }

  return (
    <>
      <h2>{gameSound?.title}</h2>

      <div className="flex flex-col gap-[.5rem] mt-[2rem]">
        {validatedRoundSound.map((round, i) => (
          <div
            key={i}
            className="flex gap-[.75rem] w-full justify-center items-center"
          >
            {Array.from(round).map((note, index) =>
              note == " " ? (
                <div key={index + "-" + roundIndex}>-</div>
              ) : (
                <GuessrValidatedNote
                  key={index}
                  note={note}
                ></GuessrValidatedNote>
              )
            )}
          </div>
        ))}
      </div>

      {phase !== Phase.WIN_GAME && (
        <div className="flex gap-[.75rem] mt-[2rem] w-full justify-center h-[12rem] items-center">
          {Array.from(triesSound).map((tryNote, index) =>
            tryNote.note == " " ? (
              <div key={index + "-" + roundIndex}>-</div>
            ) : (
              <GuessrNote
                key={index + "-" + roundIndex}
                index={index}
                note={tryNote.note}
                result={tryNote.result}
                setFocus={index === currentIndex}
                emitInput={(key) => {
                  inputEmitted(index, key);
                }}
                emitFocus={() => {
                  focusGuessrNote(index);
                }}
              ></GuessrNote>
            )
          )}
          <input ref={submitInput} type="submit" className="h-0 w-0"></input>
        </div>
      )}
      {phase === Phase.WIN_GAME && (
        <h3 className="win-text h-[12rem] mt-[2rem]">GAGNÉ</h3>
      )}
      <div className="flex flex-col gap-[.5rem] mt-[2rem]">
        {gameSound &&
          gameSound.notes.slice(roundIndex + 1).map((round, i) => (
            <div
              key={i}
              className="flex gap-[.75rem] w-full justify-center items-center"
            >
              {Array.from(round).map((songNote, index) =>
                songNote.note == " " ? (
                  <div key={index + "-" + roundIndex}>-</div>
                ) : (
                  <div
                    key={index}
                    className="h-[3rem] w-[2rem] bg-border rounded-sm"
                  ></div>
                )
              )}
            </div>
          ))}
      </div>

      {displayRoundWinPhase ? (
        <CountdownProgress
          className="w-1/2 mx-auto my-[2rem]"
          duration={0}
          callbackZero={() => nextRound()}
        ></CountdownProgress>
      ) : (
        <div className="w-1/2 mx-auto my-[2rem] h-[0.5rem]"></div>
      )}
      <Keyboard keyboardType={gameSound?.keyboardType}></Keyboard>
    </>
  );
}

export default Guessr;
