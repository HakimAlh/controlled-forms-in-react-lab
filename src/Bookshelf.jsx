import { useState } from "react";

const Bookshelf = () => {
	const [books, setBooks] = useState([
		{ title: "Fourth Wing", author: "Rebecca Yarros" },
		{ title: "The Lion, the Witch and the Wardrobe", author: "C.S. Lewis" },
	]);

	const initialState = {
		bookName: "",
		author: "",
	};

	const [formData, setFormData] = useState(initialState);

	const handleInputChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setBooks([...books, formData]);
	};

	return (
		<>
			<div className="bookshelfDiv">
				<div className="formDiv">
					<h3>Add a Book!</h3>
					{
						<form onSubmit={handleSubmit}>
                            <label for="">Title:</label>
							<input type="text" onChange={handleInputChange} name="bookName" />
                            <label for="">Author:</label>
                            <input type="text" onChange={handleInputChange} name="author" />
							<button type="submit">Add a Book!</button>
						</form>
					}
				</div>
				<div className="bookCardsDiv">
					{books.map((book) => (
						<div>
							<p>{book.bookName}</p>
							<p>{book.author}</p>
                            <hr/>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default Bookshelf;
