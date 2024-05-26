import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";

const ShowBooks = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://book-store-app-9pec.onrender.com/books/${id}`)
      .then((response) => {
        setBook(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full gap-24 mt-28">
      <div className="text-4xl font-semibold">Book Details</div>
      <div className="grid grid-flow-col grid-rows-6 mx-6 ">
        <h3 className="p-2 text-lg font-medium border border-t-0 border-l-0 text-primary">
          ID
        </h3>
        <h3 className="p-2 text-lg font-medium border border-t-0 border-l-0 text-primary">
          Title
        </h3>
        <h3 className="p-2 text-lg font-medium border border-t-0 border-l-0 text-primary">
          Author
        </h3>
        <h3 className="p-2 text-lg font-medium border border-t-0 border-l-0 text-primary">
          Publish Year
        </h3>
        <h3 className="p-2 text-lg font-medium border border-t-0 border-l-0 text-primary">
          Create Time
        </h3>
        <h3 className="p-2 text-lg font-medium border border-t-0 border-b-0 border-l-0 text-primary">
          Last Update Time
        </h3>

        <h3 className="p-2 border border-t-0 border-l-0 border-r-0">
          {book._id}
        </h3>
        <h3 className="p-2 border border-t-0 border-l-0 border-r-0">
          {book.title}
        </h3>
        <h3 className="p-2 border border-t-0 border-l-0 border-r-0">
          {book.author}
        </h3>
        <h3 className="p-2 border border-t-0 border-l-0 border-r-0">
          {book.publishYear}
        </h3>
        <h3 className="p-2 border border-t-0 border-l-0 border-r-0">
          {new Date(book.createdAt).toString()}
        </h3>
        <h3 className="p-2 border border-t-0 border-b-0 border-l-0 border-r-0">
          {new Date(book.updatedAt).toString()}
        </h3>
      </div>
    </div>
  );
};

export default ShowBooks;
