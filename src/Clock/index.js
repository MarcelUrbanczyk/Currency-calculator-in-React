import { useCurrentDate } from "./useCurrentDate";
import { Paragraph } from "./styled";
const Clock = () => {
  const currentTime = useCurrentDate();
  const formattedTime = () => {
    return currentTime.toLocaleString();
  };
  return <Paragraph>{formattedTime()}</Paragraph>;
};
export default Clock;
