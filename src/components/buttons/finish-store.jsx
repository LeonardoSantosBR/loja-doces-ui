import { useDispatch } from "react-redux";
import { resetStore } from "../../redux/slices/candies.slice";

function FinishStore() {
  const dispatch = useDispatch();

  return (
    <button
      className="w-[30%] h-12 bg-red-500 rounded mr-6"
      onClick={() => dispatch(resetStore())}
    >
      <p className="text-xl text-white">finalizar</p>
    </button>
  );
}

export default FinishStore;
