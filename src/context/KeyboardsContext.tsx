import { KeyboardType } from "@/types/guessr.types";
import { createContext, useContext, type ReactNode } from "react";

interface KeyboardContextType {
  keyboards: Record<KeyboardType, any[]>;
  noteToKey: (keyboardType: KeyboardType, note: string) => string;
  keyToNote: (keyboardType: KeyboardType, key: string) => string;
}

const KeyboardContext = createContext<KeyboardContextType | null>(null);

export function KeyboardContextProvider({ children }: { children: ReactNode }) {
  const keyboards: Record<
    KeyboardType,
    { key: string; label: string; ref: string; note?: string }[]
  > = {
    simple: [
      { key: "1", label: "Do", ref: "1", note: "C" },
      { key: "2", label: "Re", ref: "2", note: "D" },
      { key: "3", label: "Mi", ref: "3", note: "E" },
      { key: "4", label: "Fa", ref: "4", note: "F" },
      { key: "5", label: "Sol", ref: "5", note: "G" },
      { key: "6", label: "La", ref: "6", note: "A" },
      { key: "7", label: "Si", ref: "7", note: "B" },
      { key: "8", label: "Do+", ref: "8", note: "C+" },
      { key: "9", label: "Re+", ref: "9", note: "D+" },
      { key: "0", label: "Mi+", ref: "0", note: "E+" },
    ],
    double: [
      { key: "1", label: "Do 4", ref: "c4" },
      { key: "2", label: "Re 4", ref: "d4" },
      { key: "3", label: "Mi 4", ref: "e4" },
      { key: "4", label: "Fa 4", ref: "f4" },
      { key: "5", label: "Sol 4", ref: "g4" },
      { key: "6", label: "La 4", ref: "a4" },
      { key: "7", label: "Si 4", ref: "b4" },
      { key: "8", label: "Do 5", ref: "c5" },
      { key: "9", label: "Re 5 ", ref: "d5" },
      { key: "0", label: "Mi 5", ref: "e5" },
      { key: "A", label: "Fa 5", ref: "f5" },
      { key: "Z", label: "Sol 5", ref: "g5" },
      { key: "E", label: "La 5", ref: "a5" },
      { key: "R", label: "Si 5", ref: "b5" },
      { key: "T", label: "Do 6", ref: "c6" },
      { key: "Y", label: "Re 6", ref: "d6" },
      { key: "U", label: "Mi 6", ref: "e6" },
      { key: "I", label: "Fa 6", ref: "f6" },
      { key: "O", label: "Sol 6", ref: "g6" },
      { key: "P", label: "La 6", ref: "a6" },
      { key: "Q", label: "Si 6", ref: "b6" },
      { key: "S", label: "Do 7", ref: "c7" },
    ],
  };

  const noteToKey = (keyboardType: KeyboardType, note: string): string => {
    if (note === " " || note === "-") return note;
    const keyboard = keyboards[keyboardType];
    return (
      keyboard.find((keyboardKey) => keyboardKey.note === note)?.key ?? "@"
    );
  };

  const keyToNote = (keyboardType: KeyboardType, key: string): string => {
    const keyboard = keyboards[keyboardType];
    return keyboard.find((keyboardKey) => keyboardKey.key === key)?.note ?? "@";
  };

  const value = {
    keyboards,
    noteToKey,
    keyToNote,
  };

  return (
    <KeyboardContext.Provider value={value}>
      {children}
    </KeyboardContext.Provider>
  );
}

export function useKeyboardsContext(): KeyboardContextType {
  const context = useContext(KeyboardContext);
  if (context === null) {
    throw new Error(
      "useKeyboardsContext must be used within a KeyboardsContextProvider"
    );
  }
  return context;
}
