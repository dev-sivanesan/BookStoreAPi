import Book from '../models/book';

export const getAllBooks = async () => {
    try {
        return await Book.findAll();
    } catch (error) {
        throw new Error('Error fetching books');
    }
};
export const getBookById = async (id: number) => {
    try {
        return await Book.findByPk(id);
    } catch (error) {
        throw new Error('Error fetching book');
    }
};
export const createBook = async (bookData: { title: string; author: string; genre?: string; year?: number }) => {
    try {
        return await Book.create(bookData);
    } catch (error) {
        throw new Error('Error creating book');
    }
};
export const updateBook = async (id: number, bookData: { title: string; author: string; genre?: string; year?: number }) => {
    try {
        const book = await Book.findByPk(id);
        if (!book) {
            throw new Error('Book not found');
        }
        await book.update(bookData);
        return book;
    } catch (error) {
        throw new Error('Error updating book');
    }
};
export const deleteBook = async (id: number) => {
    try {
        const book = await Book.findByPk(id);
        if (!book) {
            throw new Error('Book not found');
        }
        await book.destroy();
    } catch (error) {
        throw new Error('Error deleting book');
    }
};
