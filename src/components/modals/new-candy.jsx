import { X } from "lucide-react";
import { useDispatch } from "react-redux";
import { addCandy } from "../../slices/candies.slice";
import { turn } from "../../slices/isCandyModalOpen.slice";
import { Formik } from "formik";
import InputMask from "react-input-mask";


function NewCandy() {
  const dispatch = useDispatch();

  const handleCreateNewCandy = (values, { setSubmitting }) => {
    dispatch(turn());
    dispatch(addCandy(values));
    setSubmitting(false);
  };

  const validateValues = (values) => {
    const errors = {};
    if (!values.nome) errors.nome = "Obrigatório";
    if (!values.preço) errors.preço = "Obrigatório";
    return errors;
  };

  return (
    <>
      <div className="w-screen h-screen top-0 left-0 absolute bg-zinc-600/55 flex justify-center items-center">
        <div className="w-[70%] h-96 bg-amber-300 rounded">
          <div className="w-[100%] h-[10%] p-1 flex justify-end">
            <X onClick={() => dispatch(turn())} />
          </div>
          <div className="w-[100%] h-[100%] bg-slate-100 p-2">
            <Formik
              initialValues={{ nome: "", quantidade: null, preço: null }}
              validate={validateValues}
              onSubmit={handleCreateNewCandy}
            >
              {({
                values,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                errors,
                touched,
              }) => (
                <form onSubmit={handleSubmit}>
                  <div className="p-2 mb-5">
                    <div className="mb-4">
                      <h3 className="text-gray-950 text-lg font-bold">
                        Nome do doce
                      </h3>
                      <input
                        type="text"
                        name="nome"
                        placeholder="Ex: halls"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.nome}
                        className="w-[100%] p-2"
                      />
                    </div>
                    <div className="mb-4">
                      <h3 className="text-gray-950 text-lg font-bold">
                        Quantidade
                      </h3>
                      <input
                        type="number"
                        name="quantidade"
                        placeholder="0"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.quantidade}
                        className="w-[100%] p-2 appearance-auto"
                      />
                    </div>
                    <div className="mb-4">
                      <h3 className="text-gray-950 text-lg font-bold">Preço</h3>
                      <InputMask
                        type="string"
                        name="preço"
                        mask="R$ 99.99"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.preço}
                        className="w-[100%] p-2"
                        placeholder="R$ 00,00"
                        maskPlaceholder={null}
                      />
                    </div>
                  </div>
                  <div className="flex justify-center items-center">
                    <button
                      type="submit"
                      className="w-[30%] h-12 bg-blue-700 rounded mr-6"
                    >
                      <p className="text-lg text-white">Criar</p>
                    </button>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewCandy;
