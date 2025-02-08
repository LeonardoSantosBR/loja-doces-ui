import { useSelector } from "react-redux";

export const IncrementManyModalVisibleSelector = () => {
  const incrementManyModalVisibleSelector = useSelector(
    (state) => state.incrementManyVisible.value
  );
  return incrementManyModalVisibleSelector;
};
