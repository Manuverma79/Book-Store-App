import React, { useState } from "react";
// import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

const CreateBooks = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSaveBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios
      .post("http://localhost:5555/books", data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Book Created successfully", { variant: "success" });
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar("Error", { variant: "error" });
        console.log(error);
      });
  };

  return (
    <div className="flex items-center justify-center w-full pt-10">
      <div className="flex flex-col items-center justify-center w-1/2 p-4 gap-11 rounded-2xl">
        <div className="text-4xl text-center">Add New Book</div>
        <label className="w-full max-w-xs form-control">
          <div className="label">
            <span className="label-text">Add Title</span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            onChange={(e) => setTitle(e.target.value)}
            className="w-full max-w-xs input input-bordered"
          />
          <div className="label">
            <span className="label-text">Add Author</span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full max-w-xs input input-bordered"
          />
          <div className="label">
            <span className="label-text">Enter Publish Year</span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            onChange={(e) => setPublishYear(e.target.value)}
            className="w-full max-w-xs input input-bordered"
          />
        </label>
        <button onClick={handleSaveBook} className="btn btn-wide">
          Save
        </button>
      </div>
    </div>
  );
};

export default CreateBooks;
