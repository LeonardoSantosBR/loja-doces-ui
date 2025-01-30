import { CirclePlus } from "lucide-react";
import { CircleMinus } from "lucide-react";
import { Trash2 } from "lucide-react";
import { Pencil } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { turn } from "../../redux/slices/update-modal-visible";
import UpdateCandyModal from "../modals/update-candy";

import {
  incrementQuantity,
  decrementQuantity,
  removeCandy,
} from "../../redux/slices/candies.slice";
import { setId } from "../../redux/slices/candy-id.slice";

function CandiesList() {
  const dispatch = useDispatch();
  const candies = useSelector((state) => state.candies.value);

  const updateModalVisible = useSelector(
    (state) => state.updateModalVisible.value
  );

  const updateCandy = (candy)=> {
    dispatch(turn())
    dispatch(setId(candy))
  }

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
              <Trash2
                color="#ff0000"
                size={24}
                className="cursor-pointer"
                onClick={() => dispatch(removeCandy(candy))}
              />
              <Pencil
                color="#ca0aff"
                size={24}
                className="cursor-pointer"
                onClick={() => dispatch(updateCandy(candy))}
              />
            </div>
          </td>
        </tr>
      ))}
      {updateModalVisible && <UpdateCandyModal />}
    </tbody>
  );
}

export default CandiesList;
