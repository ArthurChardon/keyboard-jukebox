import { useEffect, useRef, useState, type FormEvent } from "react";
import "./GuessrNote.css";
import type { NoteResult } from "@/types/guessr.types";
import { cn } from "@/lib/utils";

function GuessrNote({
  note,
  index,
  result,
  setFocus,
  emitInput,
  emitFocus,
}: {
  note: string | null;
  index: number;
  result: NoteResult | null;
  setFocus: boolean;
  emitInput: (key: string) => void;
  emitFocus: () => void;
}) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    if (setFocus && !focused) focusInput();
  }, [setFocus]);

  const focusInput = () => {
    if (!inputRef.current) return;
    inputRef.current.focus();
  };

  const selfFocused = () => {
    if (!inputRef.current) return;
    setFocused(true);
    emitFocus();
    inputRef.current.select();
    inputRef.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };

  const selfBlurred = () => {
    setFocused(false);
  };

  const manageInput = (event: FormEvent<HTMLInputElement>) => {
    if (
      (event.nativeEvent as any).inputType === "deleteContentBackward" ||
      (event.nativeEvent as any).inputType === "deleteContentForward"
    ) {
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
        onInput={(event) => manageInput(event)}
        onFocus={() => selfFocused()}
        onBlur={() => selfBlurred()}
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
