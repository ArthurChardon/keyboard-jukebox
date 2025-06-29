import { useEffect } from "react";
import { Button } from "../ui/button";
import "./Touche.css";

function Touche({
  keyToPress,
  clicked,
}: {
  keyToPress: string;
  clicked: () => void;
}) {
  const handleKeyDown = (e: any) => {
    const key = e.key.toUpperCase();
    if (key == keyToPress) {
      clicked();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [keyToPress, handleKeyDown]);

  return (
    <>
      <Button onClick={() => clicked()}>{keyToPress.toUpperCase()}</Button>
    </>
  );
}

export default Touche;
