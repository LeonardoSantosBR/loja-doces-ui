import { useState } from "react";
import Header from "./components/header/header";
import Candies from "./components/candies/candies";

function App() {
  const [candies, setCandies] = useState([]);
  return (
    <>
      <div className="w-screen h-screen">
        <Header />

        <div className="w-screen h-[80%] bg-[#E6E6E6]">
          <div className=" w-screen h-[90%] p-2">
            <button className="w-[30%] h-12 bg-green-500 rounded mr-6">
              <p className="text-2xl  text-white">Adicionar</p>
            </button>

            <div className="w-[100%] h-[100%] overflow-auto mt-3">
              <Candies candies={candies} setCandies={setCandies} />
            </div>
          </div>
        </div>

        <div className="w-screen h-[10%] bg-white flex items-center justify-between">
          <p className="text-2xl font-bold font-sans ml-4">TOTAL: 12,40</p>
          <button className="w-[30%] h-12 bg-red-500 rounded mr-6">
            <p className="text-2xl  text-white">Finalizar</p>
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
