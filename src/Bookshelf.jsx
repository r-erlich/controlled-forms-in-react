import { useState } from 'react';

const Bookshelf = () => {
  
  const [books, setBooks] = useState([
    { title: 'Blood Meridian', author: 'Cormac McCarthy' },
    { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
  ]);

  const [newBook, setNewBook] = useState({ title: '', author: '' });

  
  const handleInputChange = (event) => {
    const { name, value } = event.target; 
    setNewBook((prevBook) => ({
      ...prevBook,    
      [name]: value,  
    }));
  };

  
  const handleSubmit = (event) => {
    event.preventDefault(); 

    
    setBooks((prevBooks) => [
      ...prevBooks,   
      newBook,        
    ]);

    
    setNewBook({ title: '', author: '' });
  };

  return (
    <div className="bookshelfDiv">
      <div className="formDiv">
        <h3>Add a Book</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Title"
              value={newBook.title}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="author">Author:</label>
            <input
              type="text"
              name="author"
              id="author"
              placeholder="Author"
              value={newBook.author}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit">Add Book</button>
        </form>
      </div>

      <div className="bookCardsDiv">
        {books.map((book, index) => (
          <div key={index} className="bookCard">
            <h4>{book.title}</h4>
            <p>{book.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookshelf;