import { CirclePlus } from "lucide-react";
import { CircleMinus } from "lucide-react";
import { Trash2 } from "lucide-react";
import { Pencil } from "lucide-react";
import { Grid2x2Plus } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { turnUpdateModal } from "../../redux/slices/update-modal-visible";
import { turnIncrementManyModal } from "../../redux/slices/increment-many-modal-visible";
import UpdateCandyModal from "../modals/update-candy";

import {
  incrementQuantity,
  decrementQuantity,
  removeCandy,
} from "../../redux/slices/candies.slice";
import { setId } from "../../redux/slices/candy-id.slice";
import IncrementManyModal from "../modals/increment-many";

function CandiesList() {
  const dispatch = useDispatch();
  const candies = useSelector((state) => state.candies.value);

  const updateModalVisible = useSelector(
    (state) => state.updateModalVisible.value
  );

  const incrementManyModalVisible = useSelector(
    (state) => state.incrementManyVisible.value
  );

  const updateCandy = (candy) => {
    dispatch(turnUpdateModal());
    dispatch(setId(candy));
  };

  const incrementManyCandy = (candy) => {
    dispatch(turnIncrementManyModal());
    dispatch(setId(candy));
  };

  return (
    <tbody>
      {candies?.map((candy) => (
        <tr key={candy.id} className="text-center">
          <td className="border border-gray-300 px-4 py-2 font-bold">
            {candy.nome}
          </td>
          <td className="border border-gray-300 px-4 py-2">
            {candy.quantidade}
          </td>
          <td className="border border-gray-300 px-4 py-2">{candy.preço}</td>
          <td className="border border-gray-300 px-4 py-2">
            <div id="icons" className="flex justify-center gap-3">
              <CirclePlus
                color="#1e00ff"
                size={24}
                className="cursor-pointer"
                onClick={() => dispatch(incrementQuantity(candy))}
              />
              <CircleMinus
                color="#FFB300"
                size={24}
                className="cursor-pointer"
                onClick={() => dispatch(decrementQuantity(candy))}
              />
              <Pencil
                color="#ca0aff"
                size={24}
                className="cursor-pointer"
                onClick={() => dispatch(updateCandy(candy))}
              />
              <Grid2x2Plus
                color="#001dad"
                size={24}
                className="cursor-pointer"
                onClick={() => dispatch(incrementManyCandy(candy))}
              />
              <Trash2
                color="#ff0000"
                size={24}
                className="cursor-pointer"
                onClick={() => dispatch(removeCandy(candy))}
              />
            </div>
          </td>
        </tr>
      ))}
      {updateModalVisible && <UpdateCandyModal />}
      {incrementManyModalVisible && <IncrementManyModal />}
    </tbody>
  );
}

export default CandiesList;
