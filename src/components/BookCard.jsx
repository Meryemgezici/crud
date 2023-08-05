import React from 'react'

const BookCard = ({ book, handleRead, handleModal }) => {
    // console.log(book.title);

    return (
        <div className="d-flex border rounded shadow p-3 justify-content-between align-items-center mt-5">
            <div>
                <h5 style={{
                    textDecoration: book.isRead ? 'line-through' : 'none',
                }}>
                    {book.title}
                </h5>
                <p>{book.date}</p>
            </div>
            <div className="btn-group">
                <button className="btn btn-danger" onClick={() => handleModal(book.id)}> Sil</button>
                <button className="btn btn-primary"> Düzenle </button>
                <button className="btn btn-success" onClick={() => handleRead(book)}>{book.isRead ? "okundu" : "okunmadı"} </button>
            </div>
        </div>
    );
}

export default BookCard
