import type { GuessrSong } from "@/types/guessr.types";
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
            "124321 5",
            "345878531232",
            "345878124325699",
            "1243215",
            "8940985",
          ],
          givenNotes: [
            [0, 1, 2],
            [0, 1, 2],
            [6, 7, 8],
          ],
        },
        {
          id: "wiiShorts",
          title: "Wii sports (short)",
          notes: ["124321 5"],
          givenNotes: [[0, 1, 2]],
        },
        {
          id: "starWarsMain",
          title: "Star Wars (Main Theme)",
          notes: ["1 5 4328 5 4328 5 4342"],
          givenNotes: [[4, 5, 6]],
        },
        {
          id: "starWarsForce",
          title: "Star Wars (Force Theme)",
          notes: ["36 7 898 3 36 7 838609"],
          givenNotes: [[0, 1, 3]],
        },
        {
          id: "harryPotter",
          title: "Harry Potter",
          notes: ["36 876 09 7 6 875 73"],
          givenNotes: [[0, 3, 4]],
        },
        {
          id: "tetris",
          title: "Tetris",
          notes: ["0 789 876 680 987 890866"],
          givenNotes: [[0, 2, 3]],
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
