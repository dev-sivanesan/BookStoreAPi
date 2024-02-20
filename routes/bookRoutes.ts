import express from 'express';
import { getAllBooksController, createBookController, deleteBookController, updateBookController, getBookByIdController } from '../Controllers/bookController';

const router = express.Router();

router.get('/', getAllBooksController);
router.get('/:id', getBookByIdController);
router.post('/', createBookController);
router.put('/:id', updateBookController);
router.delete('/:id', deleteBookController);
export default router;
