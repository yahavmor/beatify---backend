import express from 'express'
import { requireAuth, requireAdmin } from '../../middlewares/requireAuth.middleware.js'
import { log } from '../../middlewares/logger.middleware.js'
import { getStations, getStationById, addStation, updateStation, removeStation, addStationMsg, removeStationMsg } from './car.controller.js'

export const stationRoutes = express.Router()

// middleware that is specific to this router
// router.use(requireAuth)

stationRoutes.get('/', log, getStations)
stationRoutes.get('/:id', getStationById)
stationRoutes.post('/', requireAuth, addStation)
stationRoutes.put('/:id', requireAuth, updateStation)
stationRoutes.delete('/:id', requireAuth, removeStation)
// router.delete('/:id', requireAuth, requireAdmin, removeCar)

carRoutes.post('/:id/msg', requireAuth, addStationMsg)
carRoutes.delete('/:id/msg/:msgId', requireAuth, removeStationMsg)