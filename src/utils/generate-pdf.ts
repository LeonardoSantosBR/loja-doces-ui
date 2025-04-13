/* eslint-disable no-unused-vars */
import jsPDF from "jspdf";
import "jspdf-autotable";

import { CandiesSelector } from "../redux/selectors/candies-selector";
import { Icandies } from "../components/interfaces";

export function GeneratorPdf() {
  const candies = CandiesSelector();

  const generatePdf = () => {
    const doc: any = new jsPDF();
    const tablesColumn = ["Nome", "Quantidade", "Preço"];
    const tableRows = candies.map(({ id, ...rest }: { id: any; rest: any }) =>
      Object.values(rest)
    );
    const totalValue = candies
      ?.reduce((acc: number, cur: Icandies) => {
        const value = acc + cur.quantidade * cur.preço;
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

  return generatePdf;
}
