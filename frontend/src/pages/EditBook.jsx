import React, { useState, useEffect } from "react";
// import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";

const EditBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [desc, setDesc] = useState("Description not provided");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://book-store-app-9pec.onrender.com/books/${id}`)
      .then((response) => {
        setAuthor(response.data.author);
        setPublishYear(response.data.publishYear);
        setTitle(response.data.title);
        setDesc(response.data.desc);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        alert("An error happened. Please Chack console");
        console.log(error);
      });
  }, []);

  const handleEditBook = () => {
    const data = {
      title,
      author,
      publishYear,
      desc,
    };
    setLoading(true);
    axios
      .put(`https://book-store-app-9pec.onrender.com/books/${id}`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Book Edited successfully", { variant: "success" });
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
        <div className="text-4xl text-center">Edit Book</div>
        {loading ? (
          <Spinner />
        ) : (
          <label className="w-full max-w-xs form-control">
            <div className="label">
              <span className="label-text">Add Title</span>
            </div>
            <input
              value={title}
              type="text"
              placeholder="Type here"
              onChange={(e) => setTitle(e.target.value)}
              className="w-full max-w-xs input input-bordered"
            />
            <div className="label">
              <span className="label-text">Add Author</span>
            </div>
            <input
              value={author}
              type="text"
              placeholder="Type here"
              onChange={(e) => setAuthor(e.target.value)}
              className="w-full max-w-xs input input-bordered"
            />
            <div className="label">
              <span className="label-text">Enter Publish Year</span>
            </div>
            <input
              value={publishYear}
              type="text"
              placeholder="Type here"
              onChange={(e) => setPublishYear(e.target.value)}
              className="w-full max-w-xs input input-bordered"
            />
            <div className="label">
              <span className="label-text">Enter Description</span>
              <span className="label-text-alt">Optional</span>
            </div>
            <input
              value={desc}
              type="text"
              placeholder="Type here"
              onChange={(e) => setDesc(e.target.value)}
              className="w-full max-w-xs input input-bordered"
            />
          </label>
        )}
        <button onClick={handleEditBook} className="btn btn-wide">
          Save
        </button>
      </div>
    </div>
  );
};

export default EditBook;
