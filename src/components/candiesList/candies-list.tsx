import UpdateCandyModal from "../modals/update-candy";
import IncrementManyModal from "../modals/increment-many";
import { UpdateModalVisibleSelector } from "../../redux/selectors/update-modal-visible-selector";
import { CandiesSelector } from "../../redux/selectors/candies-selector";
import { IncrementManyModalVisibleSelector } from "../../redux/selectors/increment-many-modal-visible-selector";
import CandiesActions from "./candies-actions";
import { Icandies } from "../interfaces";

function CandiesList() {
  const candies = CandiesSelector();
  const updateModalVisible = UpdateModalVisibleSelector();
  const incrementManyModalVisible = IncrementManyModalVisibleSelector();

  return (
    <tbody>
      {candies?.map((candy: Icandies) => (
        <tr key={candy.id} className="text-center">
          <td className="border border-gray-300 px-4 py-2 font-bold">
            {candy.nome}
          </td>
          <td className="border border-gray-300 px-4 py-2">
            {candy.quantidade}
          </td>
          <td className="border border-gray-300 px-4 py-2">R$: {candy.preço.toFixed(2)}</td>
          <td className="border border-gray-300 px-4 py-2">
            <div id="icons" className="flex justify-center gap-3">
              <CandiesActions candySelected={candy} />
            </div>
          </td>
        </tr>
      ))}
      {updateModalVisible && <UpdateCandyModal />}
      {incrementManyModalVisible && <IncrementManyModal />}
    </tbody>
  );
}

export default CandiesList;
