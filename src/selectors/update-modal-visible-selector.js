import { useSelector } from "react-redux";

export const UpdateModalVisibleSelector = () => {
  const updateModalVisibleSelector = useSelector(
    (state) => state.updateModalVisible.value
  );
  return updateModalVisibleSelector;
};
