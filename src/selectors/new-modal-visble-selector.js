import { useSelector } from "react-redux";

export const NewModalVisibleSelector = () => {
  const newModalVisible = useSelector((state) => state.newModalVisible.value);
  return newModalVisible;
};
