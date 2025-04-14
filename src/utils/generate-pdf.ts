/* eslint-disable no-unused-vars */
import jsPDF from "jspdf";
import "jspdf-autotable";

import { CandiesSelector } from "../redux/selectors/candies-selector";
import { Icandies } from "../components/interfaces";

export class GeneratorPdf {
  private candies: Icandies[];

  constructor() {
    this.candies = CandiesSelector();
  }

  private getTotalValue(): string {
    const total = this.candies.reduce((acc: number, cur: Icandies) => {
      return acc + cur.quantidade * cur.preço;
    }, 0);
    return total.toFixed(2);
  }

  private getTableRows(): any[][] {
    return this.candies.map(({ id, ...rest }) => Object.values(rest));
  }

  public generate(): void {
    const doc: any = new jsPDF();
    const tableColumns = ["Nome", "Quantidade", "Preço"];
    const tableRows = this.getTableRows();
    const totalValue = this.getTotalValue();

    doc.text(`Relatório do dia: R$: ${totalValue}`, 14, 10);
    doc.autoTable({
      head: [tableColumns],
      body: tableRows,
      startY: 20,
    });

    const pdfBlob = doc.output("blob");
    console.log(pdfBlob);

    doc.save("relatorio_vendas.pdf");
  }
}
