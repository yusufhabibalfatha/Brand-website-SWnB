import { useEffect, useState } from "react";

// ==>
const ListCheckout = ({ transaction_id }) => {
  const [orderItem, setOrderItem] = useState();
  useEffect(() => {
    const fetchOrderItem = async (transaction_id) => {
      let url = "http://localhost:4000/checkout/transaction/" + transaction_id;
      const res = await fetch(url);
      const data = await res.json();
      setOrderItem(data.rows);
    };
    fetchOrderItem(transaction_id);
  }, []);

  return (
    <div className="border border-black p-4 text-center text-sm">
      <h1 className="mb-4 text-left font-bold">Order Items : </h1>
      {orderItem &&
        orderItem.map((product, index) => (
          <div key={index} className="flex justify-between">
            <h1>
              {index + 1}. {product.name}
            </h1>
            <p>x{product.quantity}</p>
          </div>
        ))}
    </div>
  );
};

export default ListCheckout;
