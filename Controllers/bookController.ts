import { getAllBooks, createBook, updateBook, deleteBook, getBookById } from '../services/bookService';

export const getAllBooksController = async (req:any, res:any) => {
    try {
        const books = await getAllBooks();
        res.json(books);
    } catch (error:any) {
        res.status(500).json({ message: error.message });
    }
};
export const getBookByIdController=async (req:any, res:any) => {
    try {
        const book = await getBookById(req.params.id);
        res.json(book);
    } catch (error:any) {
        res.status(400).json({ message: error.message });
    }
};

export const createBookController = async (req:any, res:any) => {
    try {
        const newBook = await createBook(req.body);
        res.status(201).json(newBook);
    } catch (error:any) {
        res.status(400).json({ message: error.message });
    }
};
export const updateBookController = async (req:any, res:any) => {
    try {
        const updatedBook = await updateBook(req.params.id, req.body);
        res.json(updatedBook);
    } catch (error:any) {
        res.status(400).json({ message: error.message });
    }
};
export const deleteBookController = async (req:any, res:any) => {
    try {
        await deleteBook(req.params.id);
        res.json({ message: 'Book deleted' });
    } catch (error:any) {
        res.status(400).json({ message: error.message });
    }
};     
