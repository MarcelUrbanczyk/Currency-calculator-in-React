import { useState, useEffect } from "react";

export const useRatesData = () => {
  const [ratesData, setRatesData] = useState({
    status: "loading",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.exchangerate.host/latest?base=USD"
        );

        if (response.ok) {
          const { rates, date } = await response.json();
          setRatesData({ status: "success", rates, date });
        } else {
          throw new Error(response.statusText);
        }
      } catch (error) {
        setRatesData({
          status: "failure",
        });
      }
    };
    setTimeout(fetchData, 2000);
  }, []);
  return ratesData;
};
