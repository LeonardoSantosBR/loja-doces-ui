import { CandiesSelector } from "../../redux/selectors/candies-selector";
import { Icandies } from "../interfaces";

function TotalValue() {
  const candies = CandiesSelector();
  console.log(candies);

  const totalValue = candies
    ?.reduce((acc: number, cur: Icandies) => {
      const value = acc + cur.quantidade * cur.preço;
      return value;
    }, 0)
    ?.toFixed(2);

  return (
    <p className="text-2xl font-bold font-sans ml-4">TOTAL: {totalValue}</p>
  );
}

export default TotalValue;
