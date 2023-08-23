// ==>
const LoginAdmin = () => {
  return (
    <div className="m-4 border border-black p-4 md:mx-auto md:w-1/3 lg:w-1/4">
      <div className="text-center">
        <h1 className="text-2xl font-bold">Login Admin</h1>
        <p className="text-xs">
          Sign-up for account admin directly in database!
        </p>
      </div>
      <form className="mx-auto my-4 flex flex-col p-4">
        <label htmlFor="email">Email : </label>
        <input
          type="email"
          className="border-b-[1px] border-black bg-transparent"
        />
        <label className="mt-8" htmlFor="password">
          Password :{" "}
        </label>
        <input
          type="password"
          className="border-b-[1px] border-black bg-transparent"
        />
        <button className="mt-16 w-1/2 self-center rounded bg-color-two py-2 text-white">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginAdmin;
