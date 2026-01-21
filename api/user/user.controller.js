import { userService } from './user.service.js'
import { logger } from '../../services/logger.service.js'

export async function getUsers(req, res) {
    try {
        const users = await userService.query()
        res.json(users)
    } catch (err) {
        logger.error('Failed to get users', err)
        res.status(500).send({ err: 'Failed to get users' })
    }
}

export async function getUser(req, res) {
    try {
        const user = await userService.getById(req.params.id)
        res.json(user)
    } catch (err) {
        logger.error('Failed to get user', err)
        res.status(500).send({ err: 'Failed to get user' })
    }
}

export async function updateUser(req, res) {
    try {
        const updatedUser = await userService.update(req.body)
        res.json(updatedUser)
    } catch (err) {
        logger.error('Failed to update user', err)
        res.status(500).send({ err: 'Failed to update user' })
    }
}

export async function deleteUser(req, res) {
    try {
        await userService.remove(req.params.id)
        res.send({ msg: 'User removed' })
    } catch (err) {
        logger.error('Failed to delete user', err)
        res.status(500).send({ err: 'Failed to delete user' })
    }
}
