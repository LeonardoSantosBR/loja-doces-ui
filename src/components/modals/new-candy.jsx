import { X } from "lucide-react";
import { useDispatch } from "react-redux";
import { addCandy } from "../../redux/slices/candies.slice";
import { turn } from "../../redux/slices/isCandyModalOpen.slice";
import { Formik } from "formik";
import InputMask from "react-input-mask";
import CreateNewCandy from "../buttons/create-new-candy";
import InputNewCandy from "../inputs/input-new-candy";

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
              initialValues={{ nome: "", quantidade: 0, preço: null }}
              validate={validateValues}
              onSubmit={handleCreateNewCandy}
            >
              {({
                values,
                handleChange,
                handleBlur,
                handleSubmit,
                errors,
                touched,
              }) => (
                <form onSubmit={handleSubmit}>
                  <div className="p-2 mb-5">
                    <div className="mb-4">
                      <h3 className="text-gray-950 text-lg font-bold">
                        Nome do doce
                      </h3>
                      <InputNewCandy
                        type="text"
                        name="nome"
                        placeholder="Ex: halls"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.nome}
                        className={`
                          w-full 
                          p-2 
                          border
                           outline-none 
                           ${
                             errors.nome && touched.nome
                               ? "border-red-600 border-y-2"
                               : "border-gray-300"
                           } rounded`}
                      />
                    </div>
                    <div className="mb-4">
                      <h3 className="text-gray-950 text-lg font-bold">
                        Quantidade
                      </h3>
                      <InputNewCandy
                        type="number"
                        name="quantidade"
                        min={0}
                        max={100}                        
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.quantidade}
                        className={`w-full p-2 border outline-none ${
                          errors.quantidade && touched.quantidade
                            ? "border-red-600 border-y-2"
                            : "border-gray-300"
                        } rounded`}
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
                        placeholder="R$ 00,00"
                        maskPlaceholder={null}
                        className={`w-full p-2 border outline-none ${
                          errors.preço && touched.preço
                            ? "border-red-600 border-y-2"
                            : "border-gray-300"
                        } rounded`}
                      />
                    </div>
                  </div>
                  <div className="flex justify-center items-center">
                    <CreateNewCandy />
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
