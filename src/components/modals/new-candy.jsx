import { X } from "lucide-react";
import { useDispatch } from "react-redux";
import { turn } from "../../slices/isCandyModalOpen.slice";
import { useForm, Controller } from "react-hook-form";

function NewCandy() {
  const dispatch = useDispatch();
  const { control, handleSubmit } = useForm({
    defaultValues: {
      nome: "",
      quantidade: 0,
      preço: 0.0,
    },
  });

  function handleCreateCandy(data) {}

  return (
    <>
      <div className="w-screen h-screen top-0 left-0 absolute bg-zinc-600/55 flex justify-center items-center">
        <div className="w-[70%] h-[40%] bg-amber-300 rounded">
          <div className="w-[100%] h-[10%] p-1 flex justify-end">
            <X onClick={() => dispatch(turn())} />
          </div>
          <div className="w-[100%] h-[100%] bg-slate-700 p-2">
            <form onSubmit={handleSubmit(handleCreateCandy)}>
              <div>
                <h3 className="text-zinc-100 text-lg font-bold">Nome</h3>
                <Controller
                  control={control}
                  render={({ field }) => {
                    return (
                      <input
                        defaultValue={""}
                        id="nome"
                        type="text"
                        placeholder="nome"
                        {...field} // Use o spread para evitar conflitos de `value` e `onChange`
                      />
                    );
                  }}
                />
              </div>
              <div>
                <h3 className="text-zinc-100 text-lg font-bold">Quantidade</h3>
              </div>
              <div>
                <h3 className="text-zinc-100 text-lg font-bold">preço</h3>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewCandy;
