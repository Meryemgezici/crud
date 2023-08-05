import React from 'react'

const HandleDelete = ({handleDelete,deleteShowModal}) => {
    return (
        <div className="delete-modal">
            <div className="modal-inner shadow">
                <h5>Silmek İstiyor Musunuz ?</h5>
                <button
                    className="btn btn-warning" onClick={deleteShowModal}
                >
                    Vazgeç
                </button>
                <button className="btn btn-danger" onClick={handleDelete}>
                    Onayla
                </button>
            </div>
        </div>
    )
}

export default HandleDelete
