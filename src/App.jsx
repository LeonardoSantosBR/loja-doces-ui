import { useSelector } from "react-redux";
import Header from "./components/header/header";
import Candies from "./components/candies/candies";
import FinishStoreButton from "./components/buttons/finish-store";
import TotalValue from "./components/totalValue/total-value";
import NewCandyModal from "./components/modals/new-candy";
import NewCandyButton from "./components/buttons/new-candy";

function App() {
  const newModalVisible = useSelector((state) => state.newModalVisible.value);

  return (
    <>
      <div className="w-screen h-screen">
        <Header />
        <div className="w-screen h-[80%] bg-[#E6E6E6]">
          <div className="w-screen h-[90%] p-2">
            <NewCandyButton />
            <div className="w-[100%] h-[100%] overflow-auto mt-3">
              <Candies />
            </div>
          </div>
        </div>
        <div className="w-screen h-[10%] bg-white flex items-center justify-between">
          <TotalValue />
          <FinishStoreButton />
        </div>
        {newModalVisible && <NewCandyModal />}
      </div>
    </>
  );
}

export default App;
