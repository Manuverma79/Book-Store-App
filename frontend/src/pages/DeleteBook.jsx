import React, { useState } from "react";
import Spinner from "../components/Spinner";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";
import { AiOutlineClose } from "react-icons/ai";
const DeleteBook = ({ id, onClose, reload }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  // const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  const handleDeleteBook = () => {
    setLoading(true);
    axios
      .delete(`https://book-store-app-9pec.onrender.com/books/${id}`)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Book Deleted successfully", { variant: "success" });
        navigate("/");
        reload();
      })
      .catch((error) => {
        setLoading(false);
        // alert('An error happened. Please Chack console');
        enqueueSnackbar("Error", { variant: "error" });
        console.log(error);
      });
    onClose();
  };

  return (
    <div
      className="fixed top-0 bottom-0 left-0 right-0 z-50 flex items-center justify-center bg-black bg-opacity-60"
      onClick={onClose}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="w-[600px] max-w-full h-[400px] bg-base-100 rounded-xl m-6 p-4 text-center justify-center gap-10 flex items-center flex-col relative"
      >
        <AiOutlineClose
          className="absolute text-3xl text-red-600 cursor-pointer right-6 top-6"
          onClick={onClose}
        />
        <h1 className="text-2xl">Are You Sure You want to delete this book?</h1>
        <Link to={"/"} onClick={handleDeleteBook} className="bg-red-800 btn">
          Yes, Delete it
        </Link>
      </div>
    </div>
  );
};

export default DeleteBook;
