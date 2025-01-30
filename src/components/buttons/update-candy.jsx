import { useDispatch } from "react-redux";
import { turn } from "../../redux/slices/update-modal-visible";

function UpdateCandyButton() {
  const dispatch = useDispatch();

  return (
    <button
      className="w-32 h-12 bg-green-500 rounded mr-6"
      onClick={() => dispatch(turn())}
    >
      <p className="text-xl  text-white">editar</p>
    </button>
  );
}

export default UpdateCandyButton;
