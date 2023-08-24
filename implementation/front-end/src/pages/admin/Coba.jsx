// Package
import { useEffect, useState } from "react";
import CobaItem from "../components/CobaItems";
// ==>
const Coba = () => {
  const [data, setData] = useState();
  useEffect(() => {
    const tryingFetch = async () => {
      let url = "http://localhost:4000/checkout/transaction";
      const res = await fetch(url);
      const data = await res.json();
      setData(data.rows);
    };
    tryingFetch();
  }, []);

  return (
    <div className="mx-auto flex flex-col gap-4 p-4 md:w-1/2">
      {data &&
        data.map((data, index) => (
          <div
            key={index}
            className="relative flex flex-col gap-4 border border-black p-4"
          >
            <p>Checkout - {index + 1}</p>
            <div className="text-sm">
              <p>Name : {data.name}</p>
              <p>Email : {data.email}</p>
              <p>Phone : {data.phone_number}</p>
              <p>Adress : {data.address}</p>
              <p>Message : {data.message}</p>
            </div>
            <CobaItem key={index} transaction_id={data.ID} />
            <div className="flex items-center justify-between text-sm underline">
              <a
                href={`http://localhost:4000/checkout/receipt/${data.receipt}`}
                download={data.name + ".jpg"}
              >
                Download receipt
              </a>
              <a href="">Confirm order</a>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Coba;
