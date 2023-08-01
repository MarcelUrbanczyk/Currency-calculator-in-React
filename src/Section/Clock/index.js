import { useState, useEffect } from "react";
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
  return (
    <p className="section__headerText section__headerClock">
      {time.toLocaleString()}
    </p>
  );
};
export default Clock;
