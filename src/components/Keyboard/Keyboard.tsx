import useSound from "use-sound";
import Touche from "../Touche/Touche";
import { useEffect, useState } from "react";
import { KeyboardType } from "@/types/guessr.types";
import { useKeyboardsContext } from "@/context/KeyboardsContext";

function Keyboard({
  keyboardType,
}: {
  keyboardType: KeyboardType | undefined;
}) {
  const [touches, setTouches] = useState<any[]>([]);
  const { keyboards } = useKeyboardsContext();

  useEffect(() => {
    setTouches(keyboardType ? keyboards[keyboardType] : []);
  }, [keyboardType]);

  const soundsPath = "/sounds/piano/";
  /*
  const shortSoundsPath = "/sounds/piano/short/";
  const shortSoundExtension = ".mp3";*/

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

  const [playPianoLong, { stop: stopPianoLong }] = useSound(
    soundsPath + "piano-longs.mp3",
    {
      volume: 0.2,
      onplay: (...args: any[]) => {
        //console.info("Sound started!", args);
      },
      onend: (...args: any[]) => {
        //console.info("Sound ended!", args);
      },
      onstop: (...args: any[]) => {
        //console.info("Sound stopped!", args);
      },
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
    }
  );

  const clickKey = (refPressed: string) => {
    if (keyboardType === KeyboardType.SIMPLE) {
      switch (refPressed) {
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
      }
      return;
    }
    if (
      keyboardType === KeyboardType.DOUBLE ||
      keyboardType === KeyboardType.SIMPLE2 ||
      keyboardType === KeyboardType.ALPHABET ||
      keyboardType === KeyboardType.COMPLEX ||
      keyboardType === KeyboardType.COMPLEX_LONG
    ) {
      playPianoLong({ id: refPressed });
    }
  };

  const exitKey = (refPressed: string) => {
    if (
      keyboardType === KeyboardType.DOUBLE ||
      keyboardType === KeyboardType.SIMPLE2 ||
      keyboardType === KeyboardType.ALPHABET ||
      keyboardType === KeyboardType.COMPLEX ||
      keyboardType === KeyboardType.COMPLEX_LONG
    ) {
      stopPianoLong(refPressed); // NOT WORKING
    }
  };

  return (
    <>
      <div className="notes-keyboard flex gap-[.5rem] w-full justify-center mt-[2rem]">
        {touches.map((touche, index) => (
          <div key={index} className="flex-col">
            <div>{touche.label}</div>
            <Touche
              keyToPress={touche.key}
              clicked={() => clickKey(touche.ref)}
              exited={() => exitKey(touche.ref)}
            ></Touche>
          </div>
        ))}
      </div>
    </>
  );
}

export default Keyboard;
