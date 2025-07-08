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
          title: "Wii Sports (short)",
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
        {
          id: "starWarsMain",
          title: "Star Wars (Main Theme)",
          notes: [
            [
              { note: "C" },
              { note: " " },
              { note: "G" },
              { note: " " },
              { note: "F", given: true },
              { note: "E", given: true },
              { note: "D", given: true },
              { note: "C+" },
              { note: " " },
              { note: "G" },
              { note: " " },
              { note: "F" },
              { note: "E" },
              { note: "D" },
              { note: "C+" },
              { note: " " },
              { note: "G" },
              { note: " " },
              { note: "F" },
              { note: "E" },
              { note: "F" },
              { note: "D" },
            ],
          ],
          keyboardType: KeyboardType.SIMPLE,
        },
        {
          id: "starWarsForce",
          title: "Star Wars (Force Theme)",
          notes: [
            [
              { note: "E", given: true },
              { note: "A", given: true },
              { note: " " },
              { note: "B", given: true },
              { note: "C+" },
              { note: "D+" },
              { note: "C+" },
              { note: " " },
              { note: "E" },
              { note: " " },
              { note: "E" },
              { note: "A" },
              { note: " " },
              { note: "B" },
              { note: "" },
              { note: "C+" },
              { note: "E" },
              { note: "C+" },
              { note: "A" },
              { note: "E+" },
              { note: "D+" },
            ],
          ],
          keyboardType: KeyboardType.SIMPLE,
        },
        {
          id: "harryPotter",
          title: "Harry Potter",
          notes: [
            [
              { note: "E", given: true },
              { note: "A" },
              { note: " " },
              { note: "C+", given: true },
              { note: "B", given: true },
              { note: "A" },
              { note: " " },
              { note: "E+" },
              { note: "D+" },
              { note: " " },
              { note: "B" },
              { note: " " },
              { note: "A" },
              { note: " " },
              { note: "C+" },
              { note: "B" },
              { note: "G" },
              { note: " " },
              { note: "B" },
              { note: "E" },
            ],
          ],
          keyboardType: KeyboardType.SIMPLE,
        },
        {
          id: "tetris",
          title: "Tetris",
          notes: [
            [
              { note: "E+", given: true },
              { note: " " },
              { note: "B", given: true },
              { note: "C+", given: true },
              { note: "D+" },
              { note: " " },
              { note: "C+" },
              { note: "B" },
              { note: "A" },
              { note: " " },
              { note: "A" },
              { note: "C+" },
              { note: "E+" },
              { note: " " },
              { note: "D+" },
              { note: "C+" },
              { note: "B" },
              { note: " " },
              { note: "C+" },
              { note: "D+" },
              { note: "E+" },
              { note: "C+" },
              { note: "A" },
              { note: "A" },
            ],
            [
              { note: "D+", given: true },
              { note: " " },
              { note: "F+", given: true },
              { note: "A+", given: true },
              { note: "G+" },
              { note: "F+" },
              { note: "E+" },
              { note: " " },
              { note: "C+" },
              { note: "E+" },
              { note: "D+" },
              { note: "C+" },
              { note: "B" },
              { note: "B" },
              { note: "C+" },
              { note: "D+" },
              { note: "E+" },
              { note: "C+" },
              { note: "A" },
              { note: "A" },
            ],
          ],
          keyboardType: KeyboardType.SIMPLE2,
        },
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
