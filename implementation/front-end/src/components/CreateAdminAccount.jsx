// ==>
const CreateAdminAccount = () => {
  return (
    <>
      <p
        onClick={async () => {
          const res = await fetch("http://localhost:4000/admin/create", {
            method: "POST",
          });
          console.log("res => ", res);
        }}
      >
        Create admin
      </p>
    </>
  );
};

export default CreateAdminAccount;
