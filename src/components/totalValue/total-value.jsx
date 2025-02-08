import { CandiesSelector } from "../../redux/selectors/candies-selector";

function TotalValue() {
  const candies = CandiesSelector();

  const totalValue = candies
    ?.reduce((acc, cur) => {
      const value = acc + cur.quantidade * Number(cur.preço.split("R$ ")[1]);
      return value;
    }, 0)
    ?.toFixed(2);

  return (
    <p className="text-2xl font-bold font-sans ml-4">TOTAL: {totalValue}</p>
  );
}

export default TotalValue;
