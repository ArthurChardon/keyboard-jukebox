import useSound from "use-sound";
import Touche from "../Touche/Touche";
import "./Guessr.css";
import GuessrNote from "./GuessrNote/GuessrNote";
import { useEffect, useRef, useState } from "react";
import { NoteResult, Phase } from "@/types/guessr.types";
import GuessrValidatedNote from "./GuessrValidatedNote/GuessrValidatedNote";

function Guessr() {
  const [gameSound, useGameSound] = useState({
    notes: ["1243215", "345878531232", "345878124325699", "1243215", "8940985"],
    givenNotes: [
      [0, 1, 2],
      [0, 1, 2],
      [6, 7, 8],
    ],
  });
  345;

  const touches = [
    { key: "1", label: "Do" },
    { key: "2", label: "Re" },
    { key: "3", label: "Mi" },
    { key: "4", label: "Fa" },
    { key: "5", label: "Sol" },
    { key: "6", label: "La" },
    { key: "7", label: "Si" },
    { key: "8", label: "Do+" },
    { key: "9", label: "Re+" },
    { key: "0", label: "Mi+" },
  ];
  const soundsPath = "/sounds/piano/";

  const [playPiano] = useSound(soundsPath + "piano.mp3", {
    sprite: {
      mi_1: [0, 5000],
      do: [24000, 5000],
      do_diese: [38000, 5000],
      re: [48000, 5000],
      re_diese: [62100, 5000],
      mi: [71985, 5000],
      fa: [96010, 5000],
      fa_diese: [110150, 5000],
      sol: [119957, 5000],
      sol_diese: [134098, 5000],
      la: [143956, 5000],
      la_diese: [158071, 5000],
      si: [167943, 5000],
      do_1: [192006, 5000],
      do_1_diese: [206108, 5000],
      re_1: [215967, 5000],
      re_1_diese: [229120, 5000],
    },
  });

  useEffect(() => {
    const handleKeyDown = (e: any) => {
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
          setCurrentIndex((index) => index + 1);
          return;

        case "ArrowLeft":
          setCurrentIndex((index) => index - 1);
          return;
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const [roundIndex, setRoundIndex] = useState(0);
  const [roundSound, setRoundSound] = useState(gameSound.notes[roundIndex]);
  const [givenNotes, setGivenNotes] = useState(
    gameSound.givenNotes[roundIndex]
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [validatedRoundSound, setValidatedRoundSound] = useState<string[]>([]);

  const [triesSound, setTriesSound] = useState(
    Array.from({ length: roundSound.length }, (v, k) => ({
      note: givenNotes.includes(k) ? roundSound[k] : null,
      result: givenNotes.includes(k) ? NoteResult.CORRECT : null,
    }))
  );

  const [phase, setPhase] = useState(Phase.GUESS);

  const submitInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setRoundSound(gameSound.notes[roundIndex]);
    setGivenNotes(gameSound.givenNotes[roundIndex] ?? []);
  }, [roundIndex, gameSound]);

  useEffect(() => {
    setTriesSound(
      Array.from({ length: roundSound.length }, (v, k) => ({
        note: givenNotes.includes(k) ? roundSound[k] : null,
        result: givenNotes.includes(k) ? NoteResult.CORRECT : null,
      }))
    );
    setCurrentIndex(0);
  }, [roundSound, givenNotes]);

  const inputEmitted = (index: number, key: string) => {
    if (key === "DELETE") {
      setCurrentIndex((index) => index - 1);
      removeCurrentNote();
      return;
    }
    const tempTriesSound = [...triesSound];
    tempTriesSound[index].note = key;

    setTriesSound(tempTriesSound);
    setCurrentIndex(index + 1);
    if (index + 1 >= triesSound.length) {
      submitInput.current?.focus();
      setPhase(Phase.SUBMIT);
    }
  };

  const submitTriesSound = () => {
    setPhase(Phase.GUESS);
    const tempTriesSound = [...triesSound];
    for (let i = 0; i < triesSound.length; i++) {
      tempTriesSound[i].result =
        triesSound[i].note === roundSound[i]
          ? NoteResult.CORRECT
          : NoteResult.WRONG;
    }

    if (
      !tempTriesSound
        .map((trySound) => trySound.result)
        .includes(NoteResult.WRONG)
    ) {
      setValidatedRoundSound([...validatedRoundSound, roundSound]);
      setRoundIndex((index) => index + 1);
      return;
    }
    setTriesSound(tempTriesSound);
  };

  const removeCurrentNote = () => {
    const triesSoundTemp = [...triesSound];
    triesSoundTemp[currentIndex].note = null;
    setTriesSound(triesSoundTemp);
  };

  const clickKey = (keyPressed: string) => {
    switch (keyPressed) {
      case "1":
        playPiano({ id: "do" });
        break;

      case "2":
        playPiano({ id: "re" });
        break;

      case "3":
        playPiano({ id: "mi" });
        break;

      case "4":
        playPiano({ id: "fa" });
        break;

      case "5":
        playPiano({ id: "sol" });
        break;

      case "6":
        playPiano({ id: "la" });
        break;

      case "7":
        playPiano({ id: "si" });
        break;

      case "8":
        playPiano({ id: "do_1" });
        break;

      case "9":
        playPiano({ id: "re_1" });
        break;

      case "0":
        playPiano({ id: "mi_1" });
        break;

      case "J":
        playPiano({ id: "la_diese" });
        break;

      case "K":
        playPiano({ id: "re_diese" });
        break;

      case "L":
        playPiano({ id: "la_diese" });
        break;
    }
  };

  if (phase === Phase.SUBMIT) {
    submitTriesSound();
  }

  return (
    <>
      <h1>Guessr</h1>
      <h2>Wii sound</h2>

      <div className="flex flex-col gap-[.5rem]">
        {validatedRoundSound.map((round) => (
          <div className="flex gap-[.75rem] mt-[2reù] w-full justify-center">
            {Array.from(round).map((note, index) => (
              <GuessrValidatedNote
                key={index}
                note={note}
              ></GuessrValidatedNote>
            ))}
          </div>
        ))}
      </div>

      <div className="flex gap-[.75rem] mt-[2rem] w-full justify-center h-[12rem] items-end">
        {Array.from(triesSound).map((tryNote, index) => (
          <GuessrNote
            key={index}
            note={tryNote.note}
            result={tryNote.result}
            setFocus={index === currentIndex}
            emitInput={(key) => {
              inputEmitted(index, key);
            }}
          ></GuessrNote>
        ))}
        <input ref={submitInput} type="submit" className="h-0 w-0"></input>
      </div>

      <div className="notes-keyboard flex gap-[.5rem] w-full justify-center mt-[2rem]">
        {touches.map((touche, index) => (
          <div key={index} className="flex-col">
            <div>{touche.label}</div>
            <Touche
              keyToPress={touche.key}
              clicked={() => clickKey(touche.key)}
            ></Touche>
          </div>
        ))}
      </div>
    </>
  );
}

export default Guessr;
