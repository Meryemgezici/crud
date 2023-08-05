import { useState } from "react";
import { v4 } from 'uuid';
import BookCard from "./components/BookCard.jsx";
import HandleDelete from "./components/HandleDelete.jsx";


function App() {
  // book useState
  const [bookName, setBookName] = useState("");
  const [inputError, setInputError] = useState(false);
  const [books, setBooks] = useState([]);
  const [deleteId, setDeleteId] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    if (!e.target.value) {
      setInputError("Lütfen bir kitap ismi giriniz");
      return;
    }
    setInputError(false);
    setBookName(e.target.value);

  }

  // book objesi oluştur ve books statein ekle
  const handleSubmit = (e) => {
    e.preventDefault();

    const book = {
      id: v4(),
      title: bookName,
      date: new Date().toLocaleString(),
      isRead: false,
    }

    setBooks([...books, book]);

  }

  // Kitabın okundu okunmadı bilgisi
  const handleRead = (book) => {

    // okundu bilgisini tersine çevirme
    const updateBook = { ...book, isRead: !book.isRead };

    const bookIndex = books.findIndex((item) => item.id === book.id);

    // state'de direkt olarak değiştiremeyeceğimiz için önce kopyasını oluşturuyoruz.
    const cloneBooks = [...books];

    // Bu clonladığımız diziyi artık değiştirebiliriz çünkü state değil
    cloneBooks[bookIndex] = updateBook;

    // daha sonra bu değişikliği state atarak sayfanın o kısmını güncelleriz.
    setBooks(cloneBooks);

  }

  const handleModal = (id) => {
    setDeleteId(id);

    setShowDeleteModal(true);
  };

  const deleteShowModal=()=>{
    if(showDeleteModal===true){
      setShowDeleteModal(false);
      return;
    }
    setShowDeleteModal(true);

  }


  const handleDelete = () => {

    const cloneBooks = books.filter((item) => item.id !== deleteId);

    setBooks(cloneBooks);
    deleteShowModal();
  };

  return (
    <div>
      {/* Header */}
      <header className="bg-dark text-light py-3 fs-5 text-center">
        <h1>Kitap Kurdu</h1>
      </header>

      {/* Form */}
      <div className="container">
        {/* Alert */}
        {inputError && <div className="alert alert-danger mt-5">{inputError}</div>}

        <form className="d-flex gap-3 mt-4" onSubmit={handleSubmit}>
          <input onChange={handleChange} placeholder="Bir kitap ismi giriniz..." className="form-control shadow" type="search" />
          <button className="btn btn-warning shadow">Ekle</button>
        </form>
        {/* eğer books dizisinde eleman yoksa */}
        {
          books.length === 0 &&
          (
            <h4 className="mt-4">Henüz herhangi bir kitap eklenmedi</h4>
          )
        }

        {/* eğer books dizisinde eleman varsa */}
        {
          books.map((book) =>
          (
            <BookCard key={book.id} book={book} handleRead={handleRead} handleModal={handleModal} />

          )

          )
        }

      </div>

      {/* Delete Modal */}
      {showDeleteModal && <HandleDelete deleteShowModal={deleteShowModal} handleDelete={handleDelete} />}
    </div>
  )
}

export default App
