import { useSelector } from "react-redux";

export const CandiesSelector = () => {
  const candiesSelector = useSelector((state) => state.candies.value);
  return candiesSelector;
};
