import React, { useState } from "react";
import { Link, useParams, useNavigate } from "react-router";
import { products } from "../contstants/data";
import { useAuth } from "../contexts/AuthContext";
import OrderForm from "./OrderForm";
import { X } from "lucide-react";

const SingleProduct = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();
  const [showModal, setShowModal] = useState(false);
  const [isPaymentStep, setIsPaymentStep] = useState(false);

  const productInfo = products.find((product) => product.id == productId);

  const handleProtectedAction = () => {
    if (!isLoggedIn) {
      navigate("/sign-in", { replace: true });
    } else {
      setShowModal(true);
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case "casual":
        return "bg-fuchsia-100 text-fuchsia-700";
      case "professional":
        return "bg-green-100 text-green-700";
      case "wedding":
        return "bg-blue-100 text-blue-700";
      case "formal":
        return "bg-sky-100 text-sky-700";
      default:
        return "";
    }
  };

  return (
    <div className="p-6 dark:text-white-95">
      <div className="mb-6">
        <Link to="/shop" className="text-cyan-500 hover:underline">
          &larr; Go back
        </Link>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col md:flex-row gap-4 border-2 dark:border-white/10 max-w-3xl p-6 rounded-2xl">
          <img
            src={productInfo.image}
            alt={productInfo.name}
            className="w-60 h-full object-cover rounded-2xl"
          />

          <div className="flex flex-col gap-4 p-4">
            <h2 className="font-medium">{productInfo.name}</h2>
            <p className="dark:text-white/65">{productInfo.description}</p>
            <span
              className={`${getTypeColor(
                productInfo.type
              )} w-fit px-3 py-1 rounded-md`}
            >
              {productInfo.type}
            </span>
            <span>${productInfo.price}</span>
            <button
              onClick={handleProtectedAction}
              className="bg-cyan-700 text-white px-4 py-2 rounded-md max-w-40 hover:bg-cyan-800 transition-all duration-300"
            >
              Order now
            </button>
          </div>
        </div>
      </div>
      {showModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-40 p-4">
          <div
            className={`bg-white dark:bg-gray-900 rounded-xl w-full max-h-[70vh] overflow-hidden transition-all duration-300
      ${isPaymentStep ? "max-w-4xl" : "max-w-md"}`}
          >
            <div className="flex items-center justify-between p-4 border-b dark:border-white/10">
              <h2 className="text-xl font-semibold">Order Form</h2>
              <button
                onClick={() => setShowModal(false)}
                className="hover:bg-gray-200 dark:hover:bg-white/10 p-2 rounded-xl flex items-center justify-center transition-all duration-300"
              >
                <X size={18} />
              </button>
            </div>
            <div className="overflow-y-auto max-h-[calc(70vh-64px)] p-4 scrollbar-custom">
              <OrderForm
                productInfo={productInfo}
                setIsPaymentStep={setIsPaymentStep}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleProduct;
