import React, { useState } from "react";
import { products } from "../contstants/data";
import { useNavigate, useParams } from "react-router";
import toast from "react-hot-toast";
import { supabase } from "../lib/supabase";
import { useAuth } from "../contexts/AuthContext";

const PaymentSection = () => {
  const { user } = useAuth();
  const [isCashMode, setIsCashMode] = useState(true);
  const [cashMethod, setCashMethod] = useState("zaad");

  const [phone, setPhone] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");

  const navigate = useNavigate();

  const { productId } = useParams();
  const productInfo = products.find((product) => product.id == productId);
  console.log(productInfo);
  const [quantity, setQuantity] = useState(1);
  const price = productInfo.price;
  const totalPrice = price * quantity;
  const category = productInfo.category;

  const increase = () => setQuantity((q) => q + 1);
  const decrease = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  const getCompletionDate = (category) => {
    const today = new Date();

    if (category === "suits") {
      today.setDate(today.getDate() + 7);
    } else if (category === "jacket Suit") {
      today.setDate(today.getDate() + 4);
    } else if (category === "pants") {
      today.setDate(today.getDate() + 2);
    }

    return today.toISOString();
  };

  const cashServices = ["zaad", "sahal", "evc"];

  const confirmOrder = async () => {
    const completionDate = getCompletionDate(category);

    const { data: existingOrder, error: checkError } = await supabase
      .from("orders")
      .select("id")
      .eq("user_id", user.id)
      .eq("name", productInfo.name)
      .eq("status", "Pending")
      .maybeSingle();

    if (checkError) {
      toast.error("Error checking existing orders");
      return;
    }

    if (existingOrder) {
      toast.error(
        "You already have a pending order for this item. Please wait until it is completed."
      );
      return;
    }

    if (isCashMode) {
      if (!phone.trim()) {
        toast.error("Phone number is required");
        return;
      }
    } else {
      if (!cardNumber || !expiry || !cvc) {
        toast.error("Please fill all card details");
        return;
      }
    }

    const { error } = await supabase.from("orders").insert([
      {
        user_id: user.id,
        name: productInfo.name,
        price: totalPrice,
        quantity,
        completion_date: completionDate,
        status: "Pending",
      },
    ]);

    if (error) {
      console.error(error);
      toast.error(error.message, {
        position: "top-right",
      });
    } else {
      toast.success("Order placed successfully", {
        position: "top-right",
      });
    }

    setTimeout(() => {
      navigate("/view-orders");
    }, 2000);
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
    <div className="flex flex-col md:flex-row gap-6 p-4">
      <div className="flex flex-col gap-4 md:w-1/2">
        <div className="flex border-2 border-gray-200 dark:border-white/10 p-4 rounded-xl">
          <img
            src={productInfo.image}
            alt="product"
            className="w-28 h-full object-cover rounded-xl"
          />

          <div className="p-4 flex flex-col gap-3">
            <h1 className="font-bold">{productInfo.name}</h1>

            <span
              className={`text-sm px-2 py-1 rounded-md w-fit ${getTypeColor(
                productInfo.type
              )}`}
            >
              {productInfo.type}
            </span>

            <p className="text-sm font-semibold">${productInfo.price}</p>

            <div className="flex items-center gap-2">
              <button
                onClick={decrease}
                className="border px-2 rounded-md text-xl"
              >
                -
              </button>
              <span>{quantity}</span>
              <button
                onClick={increase}
                className="border px-2 rounded-md text-xl"
              >
                +
              </button>
            </div>
          </div>
        </div>

        <p className="font-semibold">Total price: ${totalPrice}</p>
      </div>

      <div className="md:w-1/2 border-2 border-gray-200 dark:border-white/10 p-4 rounded-xl">
        <h2 className="text-lg mb-4">Pay with</h2>
        <div className="relative flex mb-6">
          <button
            onClick={() => setIsCashMode(true)}
            className="w-1/2 font-medium"
          >
            Cash
          </button>

          <button
            onClick={() => setIsCashMode(false)}
            className="w-1/2 font-medium"
          >
            Card
          </button>

          <div
            className={`absolute bottom-0 h-0.5 w-1/2 bg-gray-900 dark:bg-gray-200 transition-all
              ${isCashMode ? "left-0" : "left-1/2"}`}
          />
        </div>

        {isCashMode ? (
          <div className="flex flex-col gap-3">
            {cashServices.map((m) => (
              <button
                key={m}
                onClick={() => setCashMethod(m)}
                className={`py-2 rounded-md border dark:border-white/10 transition ${
                  cashMethod === m
                    ? "bg-cyan-600 text-white"
                    : "hover:bg-gray-100 dark:hover:bg-white/10"
                }`}
              >
                {m.toUpperCase()} Service
              </button>
            ))}

            <input
              type="number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="25261..."
              className="border-2 border-gray-200 dark:border-white/10 focus:outline-none p-2 rounded-md mt-2"
            />
            <button
              onClick={confirmOrder}
              className="w-full mt-4 bg-cyan-600 text-white py-2 rounded-md"
            >
              Confirm Order
            </button>
          </div>
        ) : (
          <div>
            <h2 className="text-lg font-semibold mb-4">Payment Details</h2>

            <input
              placeholder="Card Number"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              maxLength={19}
              className="w-full border dark:border-white/10 focus:outline-none p-2 rounded mb-3"
            />

            <div className="flex gap-3">
              <input
                placeholder="MM/YY"
                maxLength={5}
                inputMode="numeric"
                value={expiry}
                className="w-full border dark:border-white/10 focus:outline-none p-2 rounded"
                required
                onChange={(e) => {
                  let value = e.target.value.replace(/\D/g, "");

                  if (value.length >= 3) {
                    value = value.slice(0, 2) + "/" + value.slice(2, 4);
                  }

                  setExpiry(value);
                }}
              />

              <input
                placeholder="CVC"
                value={cvc}
                onChange={(e) => setCvc(e.target.value)}
                maxLength={3}
                inputMode="numeric"
                className="w-full border dark:border-white/10 focus:outline-none p-2 rounded"
                required
              />
            </div>

            <button
              onClick={confirmOrder}
              className="w-full mt-4 bg-cyan-600 text-white py-2 rounded-md"
            >
              Confirm Order
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentSection;
