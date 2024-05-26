import React from "react";
import { MdMenuBook } from "react-icons/md";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="sticky top-0 navbar bg-base-200">
      <Link to="/" className="text-xl btn btn-ghost">
        <div className="flex items-center gap-2 font-bold">
          <MdMenuBook className="text-2xl" />
          Book Store Database
        </div>
      </Link>
    </div>
  );
};

export default Header;
