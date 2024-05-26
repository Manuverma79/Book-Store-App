import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import { IoIosAdd } from "react-icons/io";
import { PiCards } from "react-icons/pi";
import { CiViewTable } from "react-icons/ci";
import BooksTable from "../components/home/BooksTable.jsx";
import BooksCard from "../components/home/BooksCard.jsx";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState(false);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://book-store-app-9pec.onrender.com/books")
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [reload]);

  return (
    <div className="w-full min-h-screen">
      <div className="p-1 navbar bg-base-100">
        <div className="justify-center flex-1">
          <a className="p-1 text-3xl">Book List</a>
        </div>
        <div className="flex-none gap-2 right-2">
          <Link to="/books/create">
            <button className="btn btn-ghost">
              Add New Book
              <IoIosAdd className="text-2xl" />
            </button>
          </Link>
          <label className="grid cursor-pointer place-items-center">
            <input
              onClick={() => {
                setShowType(!showType);
              }}
              type="checkbox"
              value="synthwave"
              className="col-span-2 col-start-1 row-start-1 toggle theme-controller bg-base-content"
            />
            <CiViewTable className="col-start-2 row-start-1 stroke-base-100 fill-base-100" />
            <PiCards className="col-start-1 row-start-1 stroke-base-100 fill-base-100" />
          </label>
        </div>
      </div>
      {loading ? (
        <Spinner />
      ) : showType === true ? (
        <BooksTable
          reload={() => {
            setReload(!reload);
          }}
          books={books}
        />
      ) : (
        <BooksCard
          reload={() => {
            setReload(!reload);
          }}
          books={books}
        />
      )}
    </div>
  );
};

export default Home;
