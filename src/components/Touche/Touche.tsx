import { useEffect } from "react";
import { Button } from "../ui/button";
import "./Touche.css";

function Touche({
  keyToPress,
  clicked,
  exited,
}: {
  keyToPress: string;
  clicked: () => void;
  exited: () => void;
}) {
  const handleKeyDown = (e: any) => {
    const key = e.key.toUpperCase();
    if (key == keyToPress) {
      clicked();
      document.removeEventListener("keydown", handleKeyDown);
    }
  };

  const handleKeyUp = (e: any) => {
    const key = e.key.toUpperCase();
    if (key == keyToPress) {
      exited();
      document.addEventListener("keydown", handleKeyDown);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, [keyToPress, handleKeyDown, handleKeyUp]);

  return (
    <>
      <Button size={"icon"} onClick={() => clicked()}>
        {keyToPress.toUpperCase()}
      </Button>
    </>
  );
}

export default Touche;
