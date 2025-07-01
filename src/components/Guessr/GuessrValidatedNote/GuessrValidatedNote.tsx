import "./GuessrValidatedNote.css";

function GuessrValidatedNote({ note }: { note: string | null }) {
  return (
    <>
      <div
        className={
          "guessr-validated-note h-[6rem] w-[4rem] rounded-sm border-solid border-[3px] "
        }
      >
        <span className="guessr-validated-note--note">{note}</span>
      </div>
    </>
  );
}

export default GuessrValidatedNote;
