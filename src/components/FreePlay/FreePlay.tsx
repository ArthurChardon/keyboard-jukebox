import useSound from "use-sound";
import Touche from "../Touche/Touche";

function FreePlay({}: {}) {
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
    { key: "A", label: "Mi+" },
    { key: "Z", label: "Mi+" },
    { key: "E", label: "Mi+" },
    { key: "R", label: "Mi+" },
    { key: "T", label: "Mi+" },
    { key: "Y", label: "Mi+" },
    { key: "U", label: "Mi+" },
    { key: "I", label: "Mi+" },
    { key: "O", label: "Mi+" },
    { key: "P", label: "Mi+" },
    { key: "Q", label: "Mi+" },
    { key: "S", label: "Mi+" },
    { key: "D", label: "Mi+" },
    { key: "F", label: "Mi+" },
    { key: "G", label: "Mi+" },
    { key: "H", label: "Mi+" },
    { key: "J", label: "Mi+" },
    { key: "K", label: "Mi+" },
    { key: "L", label: "Mi+" },
    { key: "M", label: "Mi+" },
    { key: "W", label: "Mi+" },
    { key: "X", label: "Mi+" },
    { key: "C", label: "Mi+" },
    { key: "V", label: "Mi+" },
    { key: "B", label: "Mi+" },
    { key: "N", label: "Mi+" },
    { key: "?", label: "Mi+" },
    { key: ".", label: "Mi+" },
    { key: "/", label: "Mi+" },
    { key: "§", label: "Mi+" },
  ];
  const soundsPath = "/sounds/piano/";
  const shortSoundsPath = "/sounds/piano/short/";
  const shortSoundExtension = ".mp3";

  const [playPiano] = useSound(soundsPath + "piano.mp3", {
    volume: 0.4,
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

  const [playPianoLong] = useSound(soundsPath + "piano-longs.mp3", {
    volume: 0.2,
    sprite: {
      a0: [2106, 1800],
      a0_diese: [4120, 1800],
      b0: [6093, 1800],
      c1: [8094, 1800],
      c1_diese: [10088, 1800],
      d1: [12089, 1800],
      d1_diese: [14094, 1800],
      e1: [16100, 1800],
      f1: [18093, 1800],
      f1_diese: [20094, 1800],
      g1: [22100, 1800],
      g1_diese: [24089, 1800],
      a1: [26095, 1800],
      a1_diese: [28092, 1800],
      b1: [30093, 1800],
      c2: [32086, 1800],
      c2_diese: [34088, 1800],
      d2: [36093, 1800],
      d2_diese: [38087, 1800],
      e2: [40088, 1800],
      f2: [42085, 1800],
      f2_diese: [44087, 1800],
      g2: [46096, 1800],
      g2_diese: [48089, 1800],
      a2: [50090, 1800],
      a2_diese: [52092, 1800],
      b2: [54089, 1800],
      c3: [56091, 1800],
      c3_diese: [58092, 1800],
      d3: [60085, 1800],
      d3_diese: [62091, 1800],
      e3: [64096, 1800],
      f3: [66089, 1800],
      f3_diese: [68091, 1800],
      g3: [70092, 1800],
      g3_diese: [72094, 1800],
      a3: [74089, 1800],
      a3_diese: [76096, 1800],
      b3: [78094, 1800],
      c4: [80091, 1800],
      c4_diese: [82096, 1800],
      d4: [84094, 1800],
      d4_diese: [86091, 1800],
      e4: [88100, 1800],
      f4: [90094, 1800],
      f4_diese: [92100, 1800],
      g4: [94100, 1800],
      g4_diese: [96100, 1800],
      a4: [98100, 1800],
      a4_diese: [100100, 1800],
      b4: [102100, 1800],
      c5: [104100, 1800],
      c5_diese: [106100, 1800],
      d5: [108100, 1800],
      d5_diese: [110100, 1800],
      e5: [112100, 1800],
      f5: [114100, 1800],
      f5_diese: [116100, 1800],
      g5: [118100, 1800],
      g5_diese: [120100, 1800],
      a5: [122100, 1800],
      a5_diese: [124100, 1800],
      b5: [126100, 1800],
      c6: [128100, 1800],
      c6_diese: [130100, 1800],
      d6: [132100, 1800],
      d6_diese: [134100, 1800],
      e6: [136100, 1800],
      f6: [138100, 1800],
      f6_diese: [140100, 1800],
      g6: [142100, 1800],
      g6_diese: [144100, 1800],
      a6: [146100, 1800],
      a6_diese: [148100, 1800],
      b6: [150100, 1800],
      c7: [152100, 1800],
      c7_diese: [154100, 1800],
      d7: [156100, 1800],
      d7_diese: [158100, 1800],
      e7: [160100, 1800],
      f7: [162100, 1800],
      f7_diese: [164100, 1800],
      g7: [166100, 1800],
      g7_diese: [168100, 1800],
      a7: [170100, 1800],
      a7_diese: [172100, 1800],
      b7: [174100, 1800],
      c8: [176100, 1800],
    },
  });

  const [playA3_d] = useSound(shortSoundsPath + "a-3" + shortSoundExtension);
  const [playA4_d] = useSound(shortSoundsPath + "a-4" + shortSoundExtension);
  const [playA5_d] = useSound(shortSoundsPath + "a-5" + shortSoundExtension);
  const [playA3, { sound: soundA3 }] = useSound(
    shortSoundsPath + "a3" + shortSoundExtension
  );
  const [playA4] = useSound(shortSoundsPath + "a4" + shortSoundExtension);
  const [playA5] = useSound(shortSoundsPath + "a5" + shortSoundExtension);
  const [playB3, { sound: soundB3 }] = useSound(
    shortSoundsPath + "b3" + shortSoundExtension
    //{ loop: true, sprite: { bb3: [100, 5000] } }
  );
  const [playB4] = useSound(shortSoundsPath + "b4" + shortSoundExtension);
  const [playB5] = useSound(shortSoundsPath + "b5" + shortSoundExtension);
  const [playC3_d] = useSound(shortSoundsPath + "c-3" + shortSoundExtension);
  const [playC4_d] = useSound(shortSoundsPath + "c-4" + shortSoundExtension);
  const [playC5_d] = useSound(shortSoundsPath + "c-5" + shortSoundExtension);
  const [playC3] = useSound(shortSoundsPath + "c3" + shortSoundExtension);
  const [playC4] = useSound(shortSoundsPath + "c4" + shortSoundExtension);
  const [playC5] = useSound(shortSoundsPath + "c5" + shortSoundExtension);
  const [playD3_d] = useSound(shortSoundsPath + "d-3" + shortSoundExtension);
  const [playD4_d] = useSound(shortSoundsPath + "d-4" + shortSoundExtension);
  const [playD5_d] = useSound(shortSoundsPath + "d-5" + shortSoundExtension);
  const [playD3] = useSound(shortSoundsPath + "d3" + shortSoundExtension);
  const [playD4] = useSound(shortSoundsPath + "d4" + shortSoundExtension);
  const [playD5] = useSound(shortSoundsPath + "d5" + shortSoundExtension);
  const [playE3] = useSound(shortSoundsPath + "e3" + shortSoundExtension);
  const [playE4] = useSound(shortSoundsPath + "e4" + shortSoundExtension);
  const [playE5] = useSound(shortSoundsPath + "e5" + shortSoundExtension);
  const [playF3_d] = useSound(shortSoundsPath + "f-3" + shortSoundExtension);
  const [playF4_d] = useSound(shortSoundsPath + "f-4" + shortSoundExtension);
  const [playF5_d] = useSound(shortSoundsPath + "f-5" + shortSoundExtension);
  const [playF3] = useSound(shortSoundsPath + "f3" + shortSoundExtension);
  const [playF4] = useSound(shortSoundsPath + "f4" + shortSoundExtension);
  const [playF5] = useSound(shortSoundsPath + "f5" + shortSoundExtension);
  const [playG3_d] = useSound(shortSoundsPath + "g-3" + shortSoundExtension);
  const [playG4_d] = useSound(shortSoundsPath + "g-4" + shortSoundExtension);
  const [playG5_d] = useSound(shortSoundsPath + "g-5" + shortSoundExtension);
  const [playG3] = useSound(shortSoundsPath + "g3" + shortSoundExtension);
  const [playG4] = useSound(shortSoundsPath + "g4" + shortSoundExtension);
  const [playG5] = useSound(shortSoundsPath + "g5" + shortSoundExtension);

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

      /*case "J":
        playPiano({ id: "la_diese" });
        break;

      case "K":
        playPiano({ id: "re_diese" });
        reak;*/

      case "A":
        playA3();
        //soundA3.loop();
        break;

      case "Z":
        playB3(/*{ id: "bb3" }*/);
        break;

      case "E":
        playC3();
        break;

      case "R":
        playD3();
        break;

      case "T":
        playE3();
        break;

      case "Y":
        playF3();
        break;

      case "U":
        playG3();
        break;

      case "I":
        playA4();
        break;

      case "O":
        playB4();
        break;

      case "P":
        playC4();
        break;

      case "Q":
        playPianoLong({ id: "c5" });
        break;

      case "S":
        playPianoLong({ id: "d5" });
        break;

      case "D":
        playPianoLong({ id: "e5" });
        break;

      case "F":
        playPianoLong({ id: "f5" });
        break;

      case "G":
        playPianoLong({ id: "g5" });
        break;

      case "H":
        playPianoLong({ id: "a5" });
        break;

      case "J":
        playPianoLong({ id: "b5" });
        break;

      case "K":
        playPianoLong({ id: "c6" });
        break;

      case "L":
        playPianoLong({ id: "d6" });
        break;

      case "M":
        playPianoLong({ id: "e6" });
        break;

      case "W":
        playPianoLong({ id: "g3" });
        break;

      case "X":
        playPianoLong({ id: "a3" });
        break;

      case "C":
        playPianoLong({ id: "b3" });
        break;

      case "V":
        playPianoLong({ id: "c4" });
        break;

      case "B":
        playPianoLong({ id: "d4" });
        break;

      case "N":
        playPianoLong({ id: "e4" });
        break;

      case ",":
      case "?":
        playPianoLong({ id: "f4" });
        break;

      case ".":
      case ";":
        playPianoLong({ id: "g4" });
        break;

      case "/":
      case ":":
        playPianoLong({ id: "a4" });
        break;

      case "§":
      case "!":
        playPianoLong({ id: "b4" });
        break;
    }
  };

  return (
    <>
      <div>T Z E R E Z A A E T R E Z E R T E A A</div>
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

export default FreePlay;
