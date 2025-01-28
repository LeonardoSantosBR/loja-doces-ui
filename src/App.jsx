import Header from "./components/header/header";
import Candies from "./components/candies/candies";
import NewCandy from "./components/modals/new-candy";
import { useDispatch, useSelector } from "react-redux";
import { turn } from "./slices/isCandyModalOpen.slice";
import { resetStore } from "./slices/candies.slice";

function App() {
  const dispatch = useDispatch();
  const candies = useSelector((state) => state.candies.value);
  const isCandyModalOpen = useSelector((state) => state.isCandyModalOpen.value);

  const totalValue = candies
    ?.reduce((acc, cur) => {
      const value = acc + cur.quantidade * Number(cur.preço.split("R$ ")[1]);
      return value;
    }, 0)
    ?.toFixed(2);

  function endStore() {
    dispatch(resetStore());
  }

  return (
    <>
      <div className="w-screen h-screen">
        <Header />
        <div className="w-screen h-[80%] bg-[#E6E6E6]">
          <div className="w-screen h-[90%] p-2">
            <button
              className="w-32 h-12 bg-green-500 rounded mr-6"
              onClick={() => dispatch(turn())}
            >
              <p className="text-xl  text-white">novo doce</p>
            </button>
            <div className="w-[100%] h-[100%] overflow-auto mt-3">
              <Candies />
            </div>
          </div>
        </div>
        <div className="w-screen h-[10%] bg-white flex items-center justify-between">
          <p className="text-2xl font-bold font-sans ml-4">
            TOTAL: {totalValue}
          </p>
          <button
            className="w-[30%] h-12 bg-red-500 rounded mr-6"
            onClick={() => endStore()}
          >
            <p className="text-xl   text-white">finalizar</p>
          </button>
        </div>
        {isCandyModalOpen && <NewCandy />}
      </div>
    </>
  );
}

export default App;
