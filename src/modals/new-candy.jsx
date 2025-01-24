import { X } from "lucide-react";

function NewCandy() {
  return (
    <>
      <div className="w-screen h-screen top-0 left-0 absolute bg-zinc-600/55 flex justify-center items-center">
        <div className="w-[70%] h-[40%] bg-amber-300 rounded">
          <div className="w-[100%] h-[10%] p-1 flex justify-end">
            <X />
          </div>
        </div>
      </div>
    </>
  );
}

export default NewCandy;
