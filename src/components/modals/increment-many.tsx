import { X } from "lucide-react";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { incrementManyQuantity } from "../../redux/slices/candies.slice";
import { turnIncrementManyModal } from "../../redux/slices/increment-many-modal-visible";
import InputNewCandy from "../inputs/input-new-candy";
import IncrementManyButton from "../buttons/increment-many";
import { CandiesSelector } from "../../redux/selectors/candies-selector";
import { CandyIdSelector } from "../../redux/selectors/candy-id-selector";
import { Icandies, IvalidateValues } from "../interfaces";

function IncrementManyModal() {
  const dispatch = useDispatch();
  const candyId = CandyIdSelector();

  const handleIncrementMany = (
    values: { quantidade: number },
    { setSubmitting }: any
  ): any => {
    dispatch(turnIncrementManyModal());
    dispatch(incrementManyQuantity({ id: candyId, ...values }));
    setSubmitting(false);
  };

  const validateValues = (values:  IvalidateValues) => {
    const errors: IvalidateValues= {};
    if (!values.quantidade) errors.quantidade = "Obrigatório";
    return errors;
  };

  return (
    <>
      <div className="w-screen h-screen top-0 left-0 absolute bg-zinc-600/55 flex justify-center items-center">
        <div className="w-[70%] h-72 bg-amber-300 rounded">
          <div className="w-[100%] h-[10%] p-1 flex justify-end">
            <X onClick={() => dispatch(turnIncrementManyModal())} />
          </div>
          <div className="w-[100%] h-[100%] bg-slate-100 p-2">
            <Formik
              initialValues={{
                quantidade: 0,
              }}
              validate={validateValues}
              onSubmit={handleIncrementMany}
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
                        Quantidade aumentada
                      </h3>
                      <InputNewCandy
                        type="number"
                        name="quantidade"
                        placeholder="Ex: 10"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.quantidade}
                        className={`
                          w-full 
                          p-2 
                          border
                           outline-none 
                           ${
                             errors.quantidade && touched.quantidade
                               ? "border-red-600 border-y-2"
                               : "border-gray-300"
                           } rounded`}
                      />
                    </div>
                  </div>
                  <div className="flex justify-center items-center">
                    <IncrementManyButton />
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

export default IncrementManyModal;
