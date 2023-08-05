import { useState, useEffect } from "react";
import { Paragraph } from "./styled";
const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const clockInterval = setInterval(() => {
      setTime(new Date(), 1000);
    });
    return () => {
      clearInterval(clockInterval);
    };
  }, []);

  return <Paragraph>{time.toLocaleString()}</Paragraph>;
};
export default Clock;
