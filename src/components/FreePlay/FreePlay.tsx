import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { KeyboardType } from "@/types/guessr.types";
import Keyboard from "../Keyboard/Keyboard";
import { useState } from "react";

function FreePlay({}: {}) {
  const [keyboardType, setKeyboardType] = useState<KeyboardType>(
    KeyboardType.SIMPLE
  );

  return (
    <>
      <Select
        defaultValue={keyboardType}
        onValueChange={(value) => {
          setKeyboardType(value as KeyboardType);
        }}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Keyboard" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value={KeyboardType.SIMPLE}>Simple</SelectItem>
          <SelectItem value={KeyboardType.DOUBLE}>Double</SelectItem>
          <SelectItem value={KeyboardType.SIMPLE2}>Simple 2</SelectItem>
          <SelectItem value={KeyboardType.ALPHABET}>Alphabet</SelectItem>
          <SelectItem value={KeyboardType.COMPLEX}>Complex</SelectItem>
        </SelectContent>
      </Select>
      <Keyboard keyboardType={keyboardType}></Keyboard>
    </>
  );
}

export default FreePlay;
