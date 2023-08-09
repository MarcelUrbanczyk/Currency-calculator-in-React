import { useCurrentDate } from "./useCurrentDate";
import { Paragraph } from "./styled";
const Clock = () => {
  const currentDate = useCurrentDate();
  const formattedTime = () => {
    return currentDate.toLocaleString("en-US");
  };
  return <Paragraph>{formattedTime()}</Paragraph>;
};
export default Clock;
