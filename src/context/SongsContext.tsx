import { type GuessrSong } from "@/types/guessr.types";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { songsList } from "./songs";

interface SongsContextType {
  songs: GuessrSong[];
}

const SongsContext = createContext<SongsContextType | null>(null);

export function SongsContextProvider({ children }: { children: ReactNode }) {
  const [songs, setSongs] = useState<GuessrSong[]>([]);

  useEffect(() => {
    const fetchSongs = async () => {
      setSongs(songsList);
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
