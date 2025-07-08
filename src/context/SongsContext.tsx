import { KeyboardType, type GuessrSong } from "@/types/guessr.types";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

interface SongsContextType {
  songs: GuessrSong[];
}

const SongsContext = createContext<SongsContextType | null>(null);

export function SongsContextProvider({ children }: { children: ReactNode }) {
  const [songs, setSongs] = useState<GuessrSong[]>([]);

  useEffect(() => {
    const fetchSongs = async () => {
      setSongs([
        {
          id: "wiiSports",
          title: "Wii Sports",
          notes: [
            [
              { note: "C", given: true },
              { note: "D", given: true },
              { note: "F", given: true },
              { note: "E" },
              { note: "D" },
              { note: "C" },
              { note: " " },
              { note: "G" },
            ],
            [
              { note: "E", given: true },
              { note: "F", given: true },
              { note: "G", given: true },
              { note: "C+" },
              { note: "B" },
              { note: "C+" },
              { note: "G" },
              { note: "E" },
              { note: "C" },
              { note: "D" },
              { note: "E" },
              { note: "D" },
            ],
            [
              { note: "E" },
              { note: "F" },
              { note: "G" },
              { note: "C+" },
              { note: "B" },
              { note: "C+" },
              { note: "C", given: true },
              { note: "D", given: true },
              { note: "F", given: true },
              { note: "E" },
              { note: "D" },
              { note: "G" },
              { note: "A" },
              { note: "D+" },
              { note: "D+" },
            ],
            [
              { note: "C" },
              { note: "D" },
              { note: "F" },
              { note: "E" },
              { note: "D" },
              { note: "C" },
              { note: " " },
              { note: "G" },
            ],
            [
              { note: "C+" },
              { note: "D+" },
              { note: "F" },
              { note: "E+" },
              { note: "D+" },
              { note: "C+" },
              { note: " " },
              { note: "G" },
            ],
          ],
          keyboardType: KeyboardType.SIMPLE,
        },
        {
          id: "wiiShorts",
          title: "Wii sports (short)",
          notes: [
            [
              { note: "C", given: true },
              { note: "D", given: true },
              { note: "F", given: true },
              { note: "E" },
              { note: "D" },
              { note: "C" },
              { note: " " },
              { note: "G" },
            ],
          ],
          keyboardType: KeyboardType.SIMPLE,
        },
        /* {
          id: "starWarsMain",
          title: "Star Wars (Main Theme)",
          notes: ["1 5 4328 5 4328 5 4342"],
          givenNotes: [[4, 5, 6]],
          keyboardType: KeyboardType.SIMPLE,
        },
        {
          id: "starWarsForce",
          title: "Star Wars (Force Theme)",
          notes: ["36 7 898 3 36 7 838609"],
          givenNotes: [[0, 1, 3]],
          keyboardType: KeyboardType.SIMPLE,
        },
        {
          id: "harryPotter",
          title: "Harry Potter",
          notes: ["36 876 09 7 6 875 73"],
          givenNotes: [[0, 3, 4]],
          keyboardType: KeyboardType.SIMPLE,
        },
        {
          id: "tetris",
          title: "Tetris",
          notes: ["0 789 876 680 987 890866"],
          givenNotes: [[0, 2, 3]],
          keyboardType: KeyboardType.DOUBLE,
        },*/
      ]);
    };

    fetchSongs();
  }, []);

  const value = {
    songs,
  };

  return (
    <SongsContext.Provider value={value}>{children}</SongsContext.Provider>
  );
}

export function useSongsContext(): SongsContextType {
  const context = useContext(SongsContext);
  if (context === null) {
    throw new Error(
      "useSongsContext must be used within a SongsContextProvider"
    );
  }
  return context;
}
