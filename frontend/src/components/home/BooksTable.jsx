import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import DeleteBook from "../../pages/DeleteBook";
import { useState } from "react";

const BooksTable = ({ reload, books }) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [bookId, setBookId] = useState("");
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th className="text-center"></th>
            <th className="text-center">Title</th>
            <th className="text-center">Author</th>
            <th className="text-center">Publish Year</th>
            <th className="text-center">Operations</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => {
            return (
              <tr key={book._id} className="hover">
                <th className="text-center">{index + 1}</th>
                <td className="text-center">{book.title}</td>
                <td className="text-center">{book.author}</td>
                <td className="text-center">{book.publishYear}</td>
                <td className="text-center">
                  <div className="flex justify-center gap-x-4">
                    <Link to={`/books/details/${book._id}`}>
                      <BsInfoCircle className="text-2xl text-green-800" />
                    </Link>
                    <Link to={`/books/edit/${book._id}`}>
                      <AiOutlineEdit className="text-2xl text-yellow-600" />
                    </Link>
                    {/* <Link to={`/books/delete/${book._id}`}> */}
                    <MdOutlineDelete
                      onClick={() => {
                        setShowDeleteModal(true);
                        setBookId(book._id);
                      }}
                      className="text-2xl text-red-600 cursor-pointer"
                    />
                    {/* </Link> */}
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {showDeleteModal && (
        <DeleteBook
          reload={reload}
          id={bookId}
          onClose={() => {
            setShowDeleteModal(false);
          }}
        />
      )}
    </div>
  );
};

export default BooksTable;
