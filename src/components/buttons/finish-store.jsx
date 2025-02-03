import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import { useDispatch } from "react-redux";
import { resetStore } from "../../redux/slices/candies.slice";

function FinishStoreButton() {
  const dispatch = useDispatch();

  const finishStore = async () => {
    Swal.fire({
      title: "Tem certeza que deseja finalizar a loja?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Finalizar",
      denyButtonText: `Voltar`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Loja finalizada!");
        dispatch(resetStore());
      }
    });
  };

  return (
    <button
      className="w-[30%] h-12 bg-red-500 rounded mr-6"
      onClick={() => finishStore()}
    >
      <p className="text-xl text-white">finalizar</p>
    </button>
  );
}

export default FinishStoreButton;
