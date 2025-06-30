import { useEffect, useRef, type ChangeEvent } from "react";
import "./GuessrNote.css";

function GuessrNote({
  note,
  setFocus,
  emitInput,
}: {
  note: string | null;
  setFocus: boolean;
  emitInput: (key: string) => void;
}) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (setFocus) focusInput();
  }, [setFocus]);

  useEffect(() => {
    if (setFocus) focusInput();
  }, [note]);

  const focusInput = () => {
    if (!inputRef.current) return;
    inputRef.current.focus();
  };

  const manageInput = (event: ChangeEvent<HTMLInputElement>) => {
    const keyInput = (event.nativeEvent as any)["data"]?.toUpperCase() ?? null;
    if (keyInput) emitInput(keyInput);
  };

  return (
    <>
      <input
        ref={inputRef}
        className="h-0 w-0"
        onChange={(event) => manageInput(event)}
      ></input>
      <div
        className="guessr-note h-[12rem] w-[8rem] rounded-sm border-solid border-[3px]"
        onClick={focusInput}
      >
        <span className="guessr-note--note">{note}</span>
      </div>
    </>
  );
}

export default GuessrNote;
