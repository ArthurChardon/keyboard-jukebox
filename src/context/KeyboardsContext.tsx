import { KeyboardType } from "@/types/guessr.types";
import { createContext, useContext, type ReactNode } from "react";

interface KeyboardContextType {
  keyboards: Record<
    KeyboardType,
    { key: string; label: string; ref: string; note?: string }[]
  >;
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
    simple2: [
      { key: "1", label: "La 3", ref: "a3", note: "A" },
      { key: "2", label: "Si 3", ref: "b3", note: "B" },
      { key: "3", label: "Do 4", ref: "c4", note: "C+" },
      { key: "4", label: "Re 4", ref: "d4", note: "D+" },
      { key: "5", label: "Mi 4", ref: "e4", note: "E+" },
      { key: "6", label: "Fa 4", ref: "f4", note: "F+" },
      { key: "7", label: "Sol 4", ref: "g4", note: "G+" },
      { key: "8", label: "La 4", ref: "a4", note: "A+" },
      { key: "9", label: "Si 4", ref: "b4", note: "B+" },
      { key: "0", label: "Do 5", ref: "c5", note: "C++" },
    ],
    double: [
      { key: "1", label: "Do 3", ref: "c3", note: "C-" },
      { key: "2", label: "Re 3", ref: "d3", note: "D-" },
      { key: "3", label: "Mi 3", ref: "e3", note: "E-" },
      { key: "4", label: "Fa 3", ref: "f3", note: "F-" },
      { key: "5", label: "Sol 3", ref: "g3", note: "G-" },
      { key: "6", label: "La 3", ref: "a3", note: "A-" },
      { key: "7", label: "Si 3", ref: "b3", note: "B-" },
      { key: "8", label: "Do 4", ref: "c4", note: "C" },
      { key: "9", label: "Re 4 ", ref: "d4", note: "D" },
      { key: "0", label: "Mi 4", ref: "e4", note: "E" },
      { key: "A", label: "Fa 4", ref: "f4", note: "F" },
      { key: "Z", label: "Sol 4", ref: "g4", note: "G" },
      { key: "E", label: "La 4", ref: "a4", note: "A" },
      { key: "R", label: "Si 4", ref: "b4", note: "B" },
      { key: "T", label: "Do 5", ref: "c5", note: "C+" },
      { key: "Y", label: "Re 5", ref: "d5", note: "D+" },
      { key: "U", label: "Mi 5", ref: "e5", note: "E+" },
      { key: "I", label: "Fa 5", ref: "f5", note: "F+" },
      { key: "O", label: "Sol 5", ref: "g5", note: "G+" },
      { key: "P", label: "La 5", ref: "a5", note: "A+" },
      { key: "Q", label: "Si 5", ref: "b5", note: "B+" },
      { key: "S", label: "Do 6", ref: "c6", note: "C++" },
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
