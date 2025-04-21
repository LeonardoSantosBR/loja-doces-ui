/* eslint-disable no-unused-vars */
import jsPDF from "jspdf";
import "jspdf-autotable";

import { TotalValueUtil } from "./total-value-util";

export class GeneratorPdfUtil extends TotalValueUtil {

  private getTableRows(): any[][] {
    return this.candies.map(({ id, preço, ...rest }) => Object.values({
      ...rest,
      preço: preço.toFixed(2).replace(".",",")
    }));
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
