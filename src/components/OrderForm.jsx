import React, { useEffect, useReducer } from "react";
import { initialState, OrderReducer } from "../Reducer/OrderReducer";
import PaymentSection from "./PaymentSection";
import { products } from "../contstants/data";
import { useParams } from "react-router";


const OrderForm = ({setIsPaymentStep}) => {
  const [state, dispatch] = useReducer(OrderReducer, initialState);
  const { productId } = useParams();
  const productInfo = products.find(product => product.id == productId);

  useEffect(() => {
    setIsPaymentStep(state.showPayment);
  }, [state.showPayment, setIsPaymentStep]);

  const isSuit = productInfo.category === "suits";
  const isJacketOnly = productInfo.category === "jacket Suit";
  const isPantOnly = productInfo.category === "pants";

  const handleChange = (e) => {
    dispatch({
      type: "update_field",
      field: e.target.name,
      value: e.target.value === "" ? "" : Number(e.target.value),
    });
  };

  return (
    <div>
      {!state.showPayment && (isJacketOnly || (isSuit && state.step === 1)) && (
        <div className="p-4 flex flex-col gap-3 w-90">
          <h2 className="text-sm md:text-lg mb-4 ">
            Step {state.step}: Jacket Measurements
          </h2>

          {[
            { name: "chest", label: "Chest" },
            { name: "shoulder_width", label: "Shoulder Width" },
            { name: "sleeve_length", label: "Sleeve Length" },
            { name: "sleeve_width", label: "Sleeve Width" },
            { name: "jacket_length", label: "Jacket Length" },
            { name: "neck", label: "Neck" },
          ].map((item) => (
            <div
              key={item.name}
              className="border-2 border-gray-200 dark:border-white/10 rounded-md px-2 py-1"
            >
              <input
                type="number"
                name={item.name}
                value={state[item.name]}
                onChange={handleChange}
                placeholder={`${item.label} measure`}
                className="w-full focus:outline-none"
                required
              />
            </div>
          ))}

          <div className="flex justify-end">
            <button
              onClick={() =>
                isJacketOnly
                  ? dispatch({ type: "show-payment" })
                  : dispatch({ type: "next-step" })
              }
              className="bg-cyan-600 hover:bg-cyan-700 transition text-white px-4 py-2 rounded-md"
            >
              {isJacketOnly ? "Order" : "Next"}
            </button>
          </div>
        </div>
      )}

      {!state.showPayment && (isPantOnly || (isSuit && state.step === 2)) && (
        <div className="p-4 flex flex-col gap-3">
          <h2 className="text-sm md:text-lg mb-4">
            Step {state.step}: Pant Measurements
          </h2>

          {[
            { name: "wrist", label: "Wrist" },
            { name: "pant_length", label: "Pant Length" },
            { name: "rise", label: "Rise" },
            { name: "thigh", label: "Thigh" },
            { name: "knee", label: "Knee" },
            { name: "ankle", label: "Ankle" },
          ].map((item) => (
            <div
              key={item.name}
              className="border-2 border-gray-200 dark:border-white/10 rounded-md px-2 py-1"
            >
              <input
                type="number"
                name={item.name}
                value={state[item.name]}
                onChange={handleChange}
                placeholder={`${item.label} measure`}
                className="w-full focus:outline-none"
                required
              />
            </div>
          ))}

          <div className="flex justify-end gap-4">
            {isSuit && (
              <button
                onClick={() => dispatch({ type: "prev-step" })}
                className="border px-4 py-2 rounded-md"
              >
                Back
              </button>
            )}

            <button
              onClick={() => dispatch({ type: "show-payment" })}
              className="bg-cyan-600 hover:bg-cyan-700 transition text-white px-4 py-2 rounded-md"
            >
              Order
            </button>
          </div>
        </div>
      )}

      {state.showPayment && (
          <PaymentSection/>
       )}
    </div>
  );
};

export default OrderForm;


