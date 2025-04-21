import { Icandies } from "../components/interfaces";
import { CandiesSelector } from "../redux/selectors/candies-selector";

export class TotalValueUtil {
    public candies: Icandies[] 

    constructor(){
      this.candies = CandiesSelector();
    }

    public getTotalValue(): string {
      const total = this.candies.reduce((acc: number, cur: Icandies) => {
        return acc + cur.quantidade * cur.preço;
      }, 0);

      return total.toFixed(2);
    }
}