import CandiesList from "../candiesList/candies-list";

function Candies() {
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
        <CandiesList />
      </table>
    </div>
  );
}

export default Candies;
