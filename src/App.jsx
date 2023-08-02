import { useState } from "react";
function App() {
  // book useState
  const [bookName, setBookName] = useState("");
  const [inputError,setInputError]=useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    if (!e.target.value) {
      setInputError("Lütfen bir kitap ismi giriniz");
      return;
    }
    setInputError(false);
    setBookName(e.target.value);
    console.log(bookName);
  }
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
        
        <form className="d-flex gap-3 mt-4">
          <input onChange={handleChange} placeholder="Bir kitap ismi giriniz..." className="form-control shadow" type="search" />
          <button className="btn btn-warning shadow">Ekle</button>
        </form>

      </div>

    </div>
  )
}

export default App
