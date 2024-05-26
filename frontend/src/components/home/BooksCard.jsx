import BookSingleCard from "./BookSingleCard.jsx";

const BooksCard = ({ books, reload }) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {books.map((item) => (
        <BookSingleCard reload={reload} key={item._id} book={item} />
      ))}
    </div>
  );
};

export default BooksCard;
