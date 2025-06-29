import { useState } from "react";
import "./App.css";
import Touche from "./components/Touche/Touche";
import useSound from "use-sound";

function App() {
  const soundsPath = "/sounds/piano/";

  const [play1] = useSound(soundsPath + "a6.mp3");
  const [play2] = useSound(soundsPath + "b6.mp3");
  const [play3] = useSound(soundsPath + "c6.mp3");
  const [play4] = useSound(soundsPath + "d6-diese.mp3");
  const [play5] = useSound(soundsPath + "e6.mp3");
  const [play6] = useSound(soundsPath + "f6.mp3");
  const [play7] = useSound(soundsPath + "g6.mp3");

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
      <Touche keyToPress="1" clicked={() => clickKey("1")}></Touche>
      <Touche keyToPress="2" clicked={() => clickKey("2")}></Touche>
      <Touche keyToPress="3" clicked={() => clickKey("3")}></Touche>
      <Touche keyToPress="4" clicked={() => clickKey("4")}></Touche>
      <Touche keyToPress="5" clicked={() => clickKey("5")}></Touche>
      <Touche keyToPress="6" clicked={() => clickKey("6")}></Touche>
      <Touche keyToPress="7" clicked={() => clickKey("7")}></Touche>
      <Touche keyToPress="8" clicked={() => clickKey("8")}></Touche>
      <Touche keyToPress="9" clicked={() => clickKey("9")}></Touche>
      <Touche keyToPress="0" clicked={() => clickKey("0")}></Touche>
      <Touche keyToPress="J" clicked={() => clickKey("J")}></Touche>
      <Touche keyToPress="K" clicked={() => clickKey("K")}></Touche>
      <Touche keyToPress="L" clicked={() => clickKey("L")}></Touche>
    </>
  );
}

export default App;
