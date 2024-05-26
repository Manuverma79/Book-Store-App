import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import CreateBooks from "./pages/CreateBooks.jsx";
import ShowBooks from "./pages/ShowBooks.jsx";
import EditBook from "./pages/EditBook.jsx";
import DeleteBook from "./pages/DeleteBook.jsx";
import Header from "./components/Header.jsx";
import { SnackbarProvider } from "notistack";
import Footer from "./components/Footer.jsx";
export default function App() {
  return (
    <BrowserRouter>
      <SnackbarProvider>
        <div className="w-full min-h-screen">
          <Header></Header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/books/create" element={<CreateBooks />} />
            <Route path="/books/details/:id" element={<ShowBooks />} />
            <Route path="/books/edit/:id" element={<EditBook />} />
            {/* <Route path="/books/delete/:id" element={<DeleteBook />} /> */}
          </Routes>
          {/* <Footer></Footer> */}
        </div>
      </SnackbarProvider>
    </BrowserRouter>
  );
}
