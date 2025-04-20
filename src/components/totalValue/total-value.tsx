import { TotalValueUtil } from "../../utils/total-value-util";

function TotalValue() {
  const totalValue = new TotalValueUtil();

  return (
    <p className="text-2xl font-bold font-sans ml-4">TOTAL: {String(totalValue.getTotalValue()).replace(".", ",")}</p>
  );
}

export default TotalValue;
