import { NavLink } from "react-router-dom";

const Directory = () => {
  return (
    <>
      <NavLink to="/admin/dashboard">
        <button className="flex justify-center h-48 w-full place-items-center border-4 border-black">
          Visit admin dashboard
        </button>
      </NavLink>
    </>
  );
};

export default Directory;
