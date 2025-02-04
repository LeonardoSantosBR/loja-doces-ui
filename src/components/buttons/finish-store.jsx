/* eslint-disable no-unused-vars */
import Swal from "sweetalert2/dist/sweetalert2.js";
import jsPDF from "jspdf";
import "jspdf-autotable";
import "sweetalert2/src/sweetalert2.scss";
import { useDispatch } from "react-redux";
import { resetStore } from "../../redux/slices/candies.slice";
import { CandiesSelector } from "../../selectors/candies-selector";

function FinishStoreButton() {
  const dispatch = useDispatch();
  const candies = CandiesSelector();

  const generatePdf = () => {
    const doc = new jsPDF();
    const tablesColumn = ["Nome", "Quantidade", "Preço"];
    const tableRows = candies.map(({ id, ...rest }) => Object.values(rest));

    const totalValue = candies
      ?.reduce((acc, cur) => {
        const value = acc + cur.quantidade * Number(cur.preço.split("R$ ")[1]);
        return value;
      }, 0)
      ?.toFixed(2);

    doc.text(`Relatório do dia: R$: ${totalValue}`, 14, 10);
    doc.autoTable({
      head: [tablesColumn],
      body: tableRows,
      startY: 20,
    });
    doc.save("relatorio_vendas.pdf");
  };

  const finishStore = () => {
    Swal.fire({
      title: "Tem certeza que deseja finalizar a loja?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Finalizar",
      denyButtonText: `Voltar`,
    }).then((result) => {
      if (result.isConfirmed) {
        generatePdf();
        Swal.fire("Loja finalizada!");
        // dispatch(resetStore());
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
