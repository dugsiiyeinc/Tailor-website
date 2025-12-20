import React, { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { useAuth } from "../contexts/AuthContext";

const ViewOrders = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    const fetchOrders = async () => {
      const { data, error } = await supabase
        .from("orders")
        .select("*")
        .eq("id", user.id)
        .order("created_at", { ascending: false });

      if (!error) setOrders(data);
    };

    if (user) fetchOrders();
  }, [user]);

  return (
    <div className="p-4 md:px-20 dark:text-white-95">
      <h2 className="text-xl md:text-2xl font-bold mb-4">My Orders</h2>
      <div className="grid gap-4 md:hidden">
        {orders.length === 0 ? (
          <p className="text-center text-gray-500">No orders found</p>
        ) : (
          orders.map((o) => (
            <div
              key={o.id}
              className="border rounded-xl p-4 shadow-sm bg-white dark:bg-gray-900 dark:border-white/10"
            >
              <div className="flex justify-between mb-2">
                <h3 className="font-semibold">{o.name}</h3>
                <span className="text-sm font-medium text-cyan-600">
                  {o.status}
                </span>
              </div>

              <div className="text-sm space-y-1">
                <p>
                  <span className="font-medium">Price:</span> ${o.price}
                </p>
                <p>
                  <span className="font-medium">Quantity:</span> {o.quantity}
                </p>
                <p>
                  <span className="font-medium">Ordered:</span>{" "}
                  {new Date(o.created_at).toLocaleDateString()}
                </p>
                <p>
                  <span className="font-medium">Completion:</span>{" "}
                  {new Date(o.completion_date).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="hidden md:block overflow-x-auto px-20 ">
        <table className="w-full border-collapse border border-gray-300 dark:border-white/10">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-800">
              <th className="p-2 border border-gray-300 dark:border-white/10">Name</th>
              <th className="p-2 border border-gray-300 dark:border-white/10">Price</th>
              <th className="p-2 border border-gray-300 dark:border-white/10">Qty</th>
              <th className="p-2 border border-gray-300 dark:border-white/10">Order Date</th>
              <th className="p-2 border border-gray-300 dark:border-white/10">Completion Date</th>
              <th className="p-2 border border-gray-300 dark:border-white/10">Status</th>
            </tr>
          </thead>

          <tbody>
            {orders.length === 0 ? (
              <tr>
                <td colSpan={6} className="p-4 text-center">
                  No orders found
                </td>
              </tr>
            ) : (
              orders.map((o) => (
                <tr key={o.id} className="text-center border-b border-gray-300 dark:border-white/10">
                  <td className="p-2 border border-gray-300 dark:border-white/10">{o.name}</td>
                  <td className="p-2 border border-gray-300 dark:border-white/10">${o.price}</td>
                  <td className="p-2 border border-gray-300 dark:border-white/10">{o.quantity}</td>
                  <td className="p-2 border border-gray-300 dark:border-white/10">
                    {new Date(o.created_at).toLocaleDateString()}
                  </td>
                  <td className="p-2 border border-gray-300 dark:border-white/10">
                    {new Date(o.completion_date).toLocaleDateString()}
                  </td>
                  <td className="p-2 border border-gray-300 dark:border-white/10">
                    <span className="bg-amber-100 text-amber-700 px-2 rounded-xs">{o.status}</span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewOrders;
