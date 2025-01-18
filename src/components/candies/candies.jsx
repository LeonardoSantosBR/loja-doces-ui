/* eslint-disable react/prop-types */
import { CirclePlus } from "lucide-react";
import { CircleMinus } from "lucide-react";
import { Trash2 } from "lucide-react";

function Candies({ candies, setCandies }) {
  return (
    <div className="w-full rounded p-2">
      <table className="table-auto w-full border-collapse border ">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Nome</th>
            <th className="border border-gray-300 px-4 py-2">Quantidade</th>
            <th className="border border-gray-300 px-4 py-2">Preço</th>
            <th className="border border-gray-300 px-4 py-2">Ações</th>
          </tr>
        </thead>
        <tbody>
          {candies.map((candy) => (
            <tr key={candy.id} className="text-center">
              <td className="border border-gray-300 px-4 py-2 font-bold">
                {candy.nome}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {candy.quantidade}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {candy.preço}
              </td>
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
                  <Trash2
                    color="#ff0000"
                    size={24}
                    className="cursor-pointer"
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Candies;
