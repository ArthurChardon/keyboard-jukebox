import useSound from "use-sound";
import Touche from "../Touche/Touche";
import "./Guessr.css";
import GuessrNote from "./GuessrNote/GuessrNote";
import { useEffect, useState } from "react";
import { NoteResult } from "@/types/guessr.types";

function Guessr() {
  const wiiSound = {
    notes: "1243215 345878531232 345878124325699 1243215 8940985",
    givenNotes: [0, 1, 2],
  };

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
          submitTriesSound();
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

  const roundSound = wiiSound.notes.split(" ")[0];
  const givenNotes = wiiSound.givenNotes;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [triesSound, setTriesSound] = useState(
    Array.from({ length: roundSound.length }, (v, k) => ({
      note: givenNotes.includes(k) ? roundSound[k] : null,
      result: givenNotes.includes(k) ? NoteResult.CORRECT : null,
    }))
  );

  const inputEmitted = (index: number, key: string) => {
    if (key === "DELETE") {
      setCurrentIndex((index) => index - 1);
      removeCurrentNote();
      return;
    }
    const tempTriesSound = [...triesSound];
    tempTriesSound[index].note = key;

    clickKey(key);
    setTriesSound(tempTriesSound);
    setCurrentIndex(index + 1);
  };

  const submitTriesSound = () => {
    const tempTriesSound = [...triesSound];
    for (let i = 0; i < triesSound.length; i++) {
      tempTriesSound[i].result =
        triesSound[i].note === roundSound[i]
          ? NoteResult.CORRECT
          : NoteResult.WRONG;
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

  return (
    <>
      <h1>Guessr</h1>
      <h2>Wii sound</h2>

      <div className="flex gap-[.75rem] mt-[2rem] w-full justify-center">
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
