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

export interface GuessrSong {
  id: string;
  title: string;
  notes: string[];
  givenNotes: number[][];
}
