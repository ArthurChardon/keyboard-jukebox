import "./GuessrValidatedNote.css";

function GuessrValidatedNote({ note }: { note: string | null }) {
  return (
    <>
      <div className="guessr-validated-note h-[3rem] w-[2rem] bg-border rounded-sm flex items-center justify-center">
        <div className="guessr-validated-note--note">{note}</div>
      </div>
    </>
  );
}

export default GuessrValidatedNote;
