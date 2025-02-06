import UpdateCandyModal from "../modals/update-candy";
import IncrementManyModal from "../modals/increment-many";
import { UpdateModalVisibleSelector } from "../../selectors/update-modal-visible-selector";
import { CandiesSelector } from "../../selectors/candies-selector";
import { IncrementManyModalVisibleSelector } from "../../selectors/increment-many-modal-visible-selector";
import CandiesActions from "./candies-actions";

function CandiesList() {
  const candies = CandiesSelector();
  const updateModalVisible = UpdateModalVisibleSelector();
  const incrementManyModalVisible = IncrementManyModalVisibleSelector();

  return (
    <tbody>
      {candies?.map((candy) => (
        <tr key={candy.id} className="text-center">
          <td className="border border-gray-300 px-4 py-2 font-bold">
            {candy.nome}
          </td>
          <td className="border border-gray-300 px-4 py-2">
            {candy.quantidade}
          </td>
          <td className="border border-gray-300 px-4 py-2">{candy.preço}</td>
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
