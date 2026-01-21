import express from 'express'
import { requireAuth } from '../../middlewares/requireAuth.middleware.js'
import { log } from '../../middlewares/logger.middleware.js'
import {
    getStations,
    getStationById,
    addStation,
    updateStation,
    removeStation,
    addStationMsg,
    removeStationMsg,
    addSong,
    removeSong,
    toggleLikeStation,
    getLikedSongsStation
} from './station.controller.js'

export const stationRoutes = express.Router()

stationRoutes.get('/', log, getStations)
stationRoutes.get('/liked', requireAuth, getLikedSongsStation)
stationRoutes.get('/:id', getStationById)

stationRoutes.post('/', requireAuth, addStation)
stationRoutes.put('/:id', requireAuth, updateStation)
stationRoutes.delete('/:id', requireAuth, removeStation)

stationRoutes.post('/:id/msg', requireAuth, addStationMsg)
stationRoutes.delete('/:id/msg/:msgId', requireAuth, removeStationMsg)

stationRoutes.post('/:id/song', requireAuth, addSong)
stationRoutes.delete('/:id/song/:songId', requireAuth, removeSong)

stationRoutes.post('/:id/like', requireAuth, toggleLikeStation)
