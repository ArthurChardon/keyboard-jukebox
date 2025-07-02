import * as ProgressPrimitive from "@radix-ui/react-progress";
import { Progress } from "./progress";
import { useEffect, useRef, useState, type ComponentProps } from "react";

function CountdownProgress({
  duration,
  callbackZero,
  className,
  ...props
}: ComponentProps<typeof ProgressPrimitive.Root> & {
  duration: number; // Countdown duration in ms
  callbackZero: () => void;
}) {
  const [value, setValue] = useState(100);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    startTimeRef.current = Date.now();
    let a = 0;

    const interval = setInterval(() => {
      const elapsed = Date.now() - (startTimeRef.current || 0);
      const progress = Math.max(0, 100 - (elapsed / duration) * 100);

      setValue(Number(progress.toFixed(2)));
      a++;

      if (progress <= 0) {
        clearInterval(interval);
        callbackZero();
      }
    }, 30);

    intervalRef.current = interval;

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [duration, callbackZero]);
  return <Progress value={value} className={className} {...props}></Progress>;
}

export { CountdownProgress };
