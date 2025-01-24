/* eslint-disable react/prop-types */
import { CirclePlus } from "lucide-react";
import { CircleMinus } from "lucide-react";
import { Trash2 } from "lucide-react";

function CandiesList({ candies, setCandies }) {
  return (
    <tbody>
      {candies.map((candy) => (
        <tr key={candy.id} className="text-center">
          <td className="border border-gray-300 px-4 py-2 font-bold">
            {candy.nome}
          </td>
          <td className="border border-gray-300 px-4 py-2">
            {candy.quantidade}
          </td>
          <td className="border border-gray-300 px-4 py-2">{candy.preço}</td>
          <td className="border border-gray-300 px-4 py-2">
            <div id="icons" className="flex justify-center gap-2">
              <CirclePlus
                color="#1e00ff"
                size={24}
                className="cursor-pointer"
              />
              <CircleMinus
                color="#ff0000"
                size={24}
                className="cursor-pointer"
              />
              <Trash2 color="#ff0000" size={24} className="cursor-pointer" />
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  );
}

export default CandiesList;
