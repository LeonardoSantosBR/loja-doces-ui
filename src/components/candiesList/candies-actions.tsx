/* eslint-disable react/prop-types */
import {
  CircleMinus,
  CirclePlus,
  Grid2x2Plus,
  Pencil,
  Trash2,
} from "lucide-react";
import { useDispatch } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeCandy,
} from "../../redux/slices/candies.slice";
import { turnUpdateModal } from "../../redux/slices/update-modal-visible";
import { turnIncrementManyModal } from "../../redux/slices/increment-many-modal-visible";
import { setId } from "../../redux/slices/candy-id.slice";

function CandiesActions({candySelected}) {
  const dispatch = useDispatch();

  const updateCandy = (candy) => {
    dispatch(turnUpdateModal());
    dispatch(setId(candy));
  };

  const incrementManyCandy = (candy) => {
    dispatch(turnIncrementManyModal());
    dispatch(setId(candy));
  };

  return (
    <>
      <CirclePlus
        color="#1e00ff"
        size={24}
        className="cursor-pointer"
        onClick={() => dispatch(incrementQuantity(candySelected))}
      />
      <CircleMinus
        color="#FFB300"
        size={24}
        className="cursor-pointer"
        onClick={() => dispatch(decrementQuantity(candySelected))}
      />
      <Pencil
        color="#ca0aff"
        size={24}
        className="cursor-pointer"
        onClick={() => dispatch(updateCandy(candySelected))}
      />
      <Grid2x2Plus
        color="#001dad"
        size={24}
        className="cursor-pointer"
        onClick={() => dispatch(incrementManyCandy(candySelected))}
      />
      <Trash2
        color="#ff0000"
        size={24}
        className="cursor-pointer"
        onClick={() => dispatch(removeCandy(candySelected))}
      />
    </>
  );
}

export default CandiesActions;
