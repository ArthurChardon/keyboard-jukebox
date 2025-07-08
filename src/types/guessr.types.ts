export enum NoteResult {
  CORRECT = "correct",
  WRONG = "wrong",
}

export enum Phase {
  LOAD = "load",
  GUESS = "guess",
  SUBMIT = "submit",
  WIN = "win",
  REVEAL = "reveal",
  WIN_GAME = "win-game",
}

export enum AnimationPhase {
  VALIDATE = "validate",
  GUESS_TO_VALIDATED = "guess-to-validated",
  NEXT_TO_GUESS = "next-to-guess",
}

export interface GuessrSongNote {
  note: string;
  given?: boolean;
}

export interface GuessrSong {
  id: string;
  title: string;
  notes: GuessrSongNote[][];
  keyboardType: KeyboardType;
}

export enum KeyboardType {
  SIMPLE = "simple",
  SIMPLE2 = "simple2",
  DOUBLE = "double",
}
