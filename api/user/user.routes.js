import express from 'express'
import { requireAuth, requireAdmin } from '../../middlewares/requireAuth.middleware.js'
import { getUser, getUsers, deleteUser, updateUser } from './user.controller.js'

export const userRoutes = express.Router()

userRoutes.get('/', requireAuth, requireAdmin, getUsers)

userRoutes.get('/:id', requireAuth, getUser)

userRoutes.put('/:id', requireAuth, updateUser)

userRoutes.delete('/:id', requireAuth, requireAdmin, deleteUser)
