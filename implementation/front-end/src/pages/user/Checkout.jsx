// Module
import { useState } from "react";
import { useCartContext } from "../../hooks/useCartContext";
// ==>
const Checkout = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setphoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");
  const { totalPayment, cart } = useCartContext();

  const handleCheckout = async (e) => {
    e.preventDefault();
    let payload = new FormData(e.target);

    const products = cart.map((product) => {
      const product_id = product.id;
      const quantity = product.quantity;
      return { product_id, quantity };
    });
    payload.append("products", JSON.stringify(products));
    payload.append("total_payment", totalPayment);
    console.log("payload => ", [...payload]);
    let url = "http://localhost:4000/checkout";
    fetch(url, { method: "POST", body: payload })
      .then((res) => res.json())
      .then((data) => console.log("response => ", data))
      .catch((err) => console.log("EEROR => ", err));
    alert(
      "Thank you for your shopping. We will contact you soon via Whatsapp and Email.",
    );
    // window.location = "/coba";
  };

  return (
    <div className="grid h-max grid-cols-1 grid-rows-[min-content_min-content_max-content] justify-items-center gap-4 pb-8">
      <div className="h-fit">
        <h1 className="text-xl font-bold">Checkout</h1>
      </div>
      <div className="m-4 h-fit border border-black text-sm md:text-lg">
        {cart &&
          cart.map((product, index) => (
            <div key={product.id} className="border-b-[1px] border-black p-4">
              <h1>
                {index + 1}. {product.name}
              </h1>
              <p>Price : Rp. {product.price}</p>
              <p>Quantity : {product.quantity}</p>
            </div>
          ))}
        <p className="p-4">
          <b>Total payment :</b> ${totalPayment}
        </p>
      </div>
      <div>
        <p>Transfer your payment to : </p>
        <p>
          <i>BCA : 7891262577</i>
        </p>
        <p>
          <i>PT. Samuel White and Black</i>
        </p>
      </div>
      <form
        onSubmit={(e) => handleCheckout(e)}
        className="flex h-max w-[90%] flex-col gap-4 rounded border border-black p-4 text-sm md:w-1/2"
      >
        <h1 className="text-xl">Customer Detail.</h1>
        <label htmlFor="message">Message : </label>
        <textarea
          className="border-b-[1px] border-black bg-transparent"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          name="message"
          id="message"
          cols="5"
          rows="2"
        ></textarea>
        <label htmlFor="email">Email : </label>
        <input
          className="border-b-[1px] border-black bg-transparent"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="email"
        />
        <label htmlFor="name">Name : </label>
        <input
          className="border-b-[1px] border-black bg-transparent"
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          name="name"
        />
        <label htmlFor="phone-number">Phone Number : </label>
        <input
          className="border-b-[1px] border-black bg-transparent"
          value={phone_number}
          onChange={(e) => setphoneNumber(e.target.value)}
          type="text"
          name="phone_number"
        />
        <label htmlFor="address">Address : </label>
        <input
          className="border-b-[1px] border-black bg-transparent"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          type="text"
          name="address"
        />
        <label htmlFor="image">Receipt : </label>
        <p className="text-xs">
          Upload your payment receipt <i>(png, jpg, jpeg)</i>
        </p>
        <input
          type="file"
          name="image"
          accept="image/jpeg, image/png, image/jpeg"
        />
        <button className="my-4 text-xl">Checkout</button>
      </form>
    </div>
  );
};

export default Checkout;
