import express from 'express';
import {
    deleteUser,
    getAllUser,
    getSingleUser,
    updateUser,
} from '../controller/userController';
const router = express.Router();

import { verifyUser } from '../utils/verifyToken';

router.put('/:id', verifyUser, updateUser);

router.delete('/:id',verifyUser, deleteUser);

router.get('/:id', verifyUser, getSingleUser);

router.get('/',verifyUser, getAllUser);

export default router;
