import { useDispatch } from "react-redux";
import { turnNewModal } from "../../redux/slices/new-modal-visible";

function NewCandyButton() {
  const dispatch = useDispatch();

  return (
    <button
      className="w-32 h-12 bg-green-500 rounded mr-6"
      onClick={() => dispatch(turnNewModal())}
    >
      <p className="text-xl  text-white">novo doce</p>
    </button>
  );
}

export default NewCandyButton;
