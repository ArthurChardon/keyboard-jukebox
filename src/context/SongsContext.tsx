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
            "1243215",
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
          notes: ["1243215"],
          givenNotes: [[0, 1, 2]],
        },
        {
          id: "starWars",
          title: "Star Wars",
          notes: ["1543285432854342"],
          givenNotes: [[2, 3, 4]],
        },
        {
          id: "harryPotter",
          title: "Harry Potter",
          notes: ["36 876 09 7 6 875 73"],
          givenNotes: [[0, 3, 4]],
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
