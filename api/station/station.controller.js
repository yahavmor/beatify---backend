import { stationService } from './station.service.js'
import { logger } from '../../services/logger.service.js'

export async function getStations(req, res) {
    try {
        const stations = await stationService.query()
        res.json(stations)
    } catch (err) {
        logger.error('Failed to get stations', err)
        res.status(500).send({ err: 'Failed to get stations' })
    }
}

export async function getStationById(req, res) {
    try {
        const station = await stationService.getById(req.params.id)
        res.json(station)
    } catch (err) {
        logger.error('Failed to get station', err)
        res.status(500).send({ err: 'Failed to get station' })
    }
}

export async function addStation(req, res) {
    try {
        const station = req.body
        station.owner = req.loggedinUser
        const addedStation = await stationService.add(station)
        res.json(addedStation)
    } catch (err) {
        logger.error('Failed to add station', err)
        res.status(500).send({ err: 'Failed to add station' })
    }
}

export async function updateStation(req, res) {
    try {
        const station = { ...req.body, _id: req.params.id }
        const updatedStation = await stationService.update(station)
        res.json(updatedStation)
    } catch (err) {
        logger.error('Failed to update station', err)
        res.status(500).send({ err: 'Failed to update station' })
    }
}

export async function removeStation(req, res) {
    try {
        const deletedCount = await stationService.remove(req.params.id)
        res.send({ msg: `${deletedCount} removed` })
    } catch (err) {
        logger.error('Failed to remove station', err)
        res.status(500).send({ err: 'Failed to remove station' })
    }
}

export async function addStationMsg(req, res) {
    try {
        const msg = {
            txt: req.body.txt,
            by: req.loggedinUser,
            createdAt: Date.now()
        }
        const savedMsg = await stationService.addStationMsg(req.params.id, msg)
        res.json(savedMsg)
    } catch (err) {
        logger.error('Failed to add msg', err)
        res.status(500).send({ err: 'Failed to add msg' })
    }
}

export async function removeStationMsg(req, res) {
    try {
        const removedId = await stationService.removeStationMsg(req.params.id, req.params.msgId)
        res.send(removedId)
    } catch (err) {
        logger.error('Failed to remove msg', err)
        res.status(500).send({ err: 'Failed to remove msg' })
    }
}

export async function addSong(req, res) {
    try {
        const updatedStation = await stationService.addSong(req.params.id, req.body)
        res.json(updatedStation)
    } catch (err) {
        logger.error('Failed to add song', err)
        res.status(500).send({ err: 'Failed to add song' })
    }
}

export async function removeSong(req, res) {
    try {
        const updatedStation = await stationService.removeSong(req.params.id, req.params.songId)
        res.json(updatedStation)
    } catch (err) {
        logger.error('Failed to remove song', err)
        res.status(500).send({ err: 'Failed to remove song' })
    }
}

export async function toggleLikeStation(req, res) {
    try {
        const updatedStation = await stationService.toggleLikeStation(req.params.id, req.loggedinUser)
        res.json(updatedStation)
    } catch (err) {
        logger.error('Failed to toggle like', err)
        res.status(500).send({ err: 'Failed to toggle like' })
    }
}

export async function getLikedSongsStation(req, res) {
    try {
        const station = await stationService.getLikedSongsStation(req.loggedinUser._id)
        res.json(station)
    } catch (err) {
        logger.error('Failed to get liked songs station', err)
        res.status(500).send({ err: 'Failed to get liked songs station' })
    }
}
