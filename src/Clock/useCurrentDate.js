import { useEffect, useState } from "react";
export const useCurrentDate = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
    const clockInterval = setInterval(() => {
      setCurrentTime(new Date(), 1000);
    });
    return () => {
      clearInterval(clockInterval);
    };
  }, []);
  return currentTime;
};
