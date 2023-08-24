// ==>
const PostProduct = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const postProduct = async () => {
      let payload = new FormData(e.target);
      const url = "http://localhost:4000/products";
      const res = await fetch(url, {
        method: "POST",
        body: payload,
      });
      if (res.ok) {
        alert("Product success to post.");
      } else {
        alert("Try again.");
      }
    };
    postProduct();
  };
  return (
    <div className="mx-2 mb-8 rounded  py-4 md:mx-auto md:w-1/2">
      <div>
        <h1 className="text-center text-3xl font-bold">Post product</h1>
      </div>
      <form
        autoComplete="off"
        onSubmit={(e) => handleSubmit(e)}
        className="mt-8 flex flex-col gap-4 px-8 py-2"
      >
        <label htmlFor="name">Product name :</label>
        <input
          type="text"
          name="name"
          className="border-b-[1px] border-black bg-transparent"
        />
        <label htmlFor="description">Description :</label>
        <textarea
          name="description"
          cols="30"
          rows="3"
          className="border-b-[1px] border-black bg-transparent"
        ></textarea>
        <label htmlFor="price">Price (Rp.) :</label>
        <input
          type="number"
          name="price"
          className="border-b-[1px] border-black bg-transparent"
        />
        <label htmlFor="category">Choose category</label>
        <select name="category">
          <option value="black">Black</option>
          <option value="white">White</option>
        </select>
        <label htmlFor="image">Upload image : </label>
        <input type="file" name="image" />
        <button className="mx-auto mt-8 w-1/2 rounded bg-color-two py-2 text-white lg:w-1/3">
          Post
        </button>
      </form>
    </div>
  );
};

export default PostProduct;
