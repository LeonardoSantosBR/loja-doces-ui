import { useSelector } from "react-redux";

function TotalValue() {
  const candies = useSelector((state) => state.candies.value);

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
