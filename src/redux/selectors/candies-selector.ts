import { useSelector } from "react-redux";

export const CandiesSelector = () => {
  const candiesSelector = useSelector((state: any) => state.candies.value);
  return candiesSelector;
};
