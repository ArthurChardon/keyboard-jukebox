import { useEffect, useRef, type ChangeEvent } from "react";
import "./GuessrNote.css";
import type { NoteResult } from "@/types/guessr.types";
import { cn } from "@/lib/utils";

function GuessrNote({
  note,
  index,
  result,
  setFocus,
  emitInput,
}: {
  note: string | null;
  index: number;
  result: NoteResult | null;
  setFocus: boolean;
  emitInput: (key: string) => void;
}) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (setFocus) focusInput();
  }, [setFocus]);

  const focusInput = () => {
    if (!inputRef.current) return;
    inputRef.current.focus();
  };

  const manageInput = (event: ChangeEvent<HTMLInputElement>) => {
    if ((event.nativeEvent as any).inputType === "deleteContentBackward") {
      emitInput("DELETE");
      return;
    }
    const keyInput = (event.nativeEvent as any)["data"]?.toUpperCase() ?? null;
    if (keyInput) emitInput(keyInput);
  };

  return (
    <>
      <input
        ref={inputRef}
        name={`note-${index}`}
        className="h-0 w-0"
        value={note ?? "-"}
        onChange={(event) => manageInput(event)}
      ></input>
      <div
        className={cn(
          "guessr-note rounded-sm border-solid border-[3px]",
          result ? "note-result-" + result : ""
        )}
        onClick={focusInput}
      >
        <div className="guessr-note--note">{note}</div>
      </div>
    </>
  );
}

export default GuessrNote;
