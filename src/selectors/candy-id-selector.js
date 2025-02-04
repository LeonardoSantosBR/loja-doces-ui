import { useSelector } from "react-redux";

export const CandyIdSelector = () => {
  const candyId = useSelector((state) => state.candyId.value);
  return candyId;
};
