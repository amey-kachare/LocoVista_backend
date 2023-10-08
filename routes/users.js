import express from 'express'
import { deleteUser, getAllUser, getSingleUser, updateUser } from '../controller/userController'
const router = express.Router()

router.put('/:id',updateUser)

router.delete('/:id',deleteUser)

router.get('/:id',getSingleUser)

router.get('/',getAllUser)

export default router