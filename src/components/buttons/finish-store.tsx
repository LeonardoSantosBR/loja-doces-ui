import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import { useDispatch } from "react-redux";
import { resetStore } from "../../redux/slices/candies.slice";
import { GeneratorPdfUtil } from "../../utils/generate-pdf-util";
import { CandiesSelector } from "../../redux/selectors/candies-selector";

function FinishStoreButton() {
  const dispatch = useDispatch();
  const candies = CandiesSelector();
  const generatePdf = new GeneratorPdfUtil();

  const finishStore = () => {
    if (candies.length === 0) {
      Swal.fire({
        icon: "error",
        title: "Loja vazia",
        text: "Não é possivel finalizar a loja!",
      });
    } else {
      Swal.fire({
        title: "Tem certeza que deseja finalizar a loja?",
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: "Finalizar",
        denyButtonText: `Voltar`,
      }).then((result: any) => {
        if (result.isConfirmed) {
          generatePdf.generate();
          dispatch(resetStore());
          Swal.fire("Loja finalizada!");
        }
      });
    }
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
