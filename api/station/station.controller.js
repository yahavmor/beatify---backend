import { carService } from './station.service.js'
import { logger } from '../../services/logger.service.js'

export async function getStations(req, res) {
    try {
        const filterBy = {
            txt: req.query.txt || '',
        }
        const stations = await carService.query(filterBy)
        res.json(stations)
    } catch (err) {
        logger.error('Failed to get stations', err)
        res.status(500).send({ err: 'Failed to get stations' })
    }
}

export async function getStationById(req, res) {
    try {
        const stationId = req.params.id
        const station = await stationService.getById(stationId)
        res.json(station)
    } catch (err) {
        logger.error('Failed to get station', err)
        res.status(500).send({ err: 'Failed to get station' })
    }
}

export async function addStation(req, res) {
    const { loggedinUser } = req

    try {
        const station = req.body
        station.owner = loggedinUser
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
        const stationId = req.params.id
        const deletedCount = await stationService.remove(stationId)
        res.send(`${deletedCount} stations removed`)
    } catch (err) {
        logger.error('Failed to remove station', err)
        res.status(500).send({ err: 'Failed to remove station' })
    }
}

export async function addStationMsg(req, res) {
    const { loggedinUser } = req
    try {
        const stationId = req.params.id
        const msg = {
            txt: req.body.txt,
            by: loggedinUser,
            createdAt: Date.now(),
        }
        const savedMsg = await carService.addStationMsg(stationId, msg)
        res.json(savedMsg)
    } catch (err) {
        logger.error('Failed to update station', err)
        res.status(500).send({ err: 'Failed to update station' })
    }
}

export async function removeStationMsg(req, res) {
    try {
        const { stationId, msgId } = req.params

        const removedId = await stationService.removeStationMsg(stationId, msgId)
        res.send(removedId)
    } catch (err) {
        logger.error('Failed to remove station msg', err)
        res.status(500).send({ err: 'Failed to remove station msg' })
    }
}