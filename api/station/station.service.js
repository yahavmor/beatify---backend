import { ObjectId } from 'mongodb'

import { dbService } from '../../services/db.service.js'
import { logger } from '../../services/logger.service.js'
import { utilService } from '../../services/util.service.js'

export const carService = {
	remove,
	query,
	getById,
	add,
	update,
	addStationMsg,
	removeStationMsg,
}

async function query(filterBy = { txt: '' }) {
	try {
		const collection = await dbService.getCollection('Station')
		var stations = await collection.find(criteria).toArray()
		return stations
	} catch (err) {
		logger.error('cannot find stations', err)
		throw err
	}
}

async function getById(stationId) {
	try {
		const collection = await dbService.getCollection('Station')
		const station = await collection.findOne({ _id: ObjectId.createFromHexString(stationId) })
		station.createdAt = station._id.getTimestamp()
		return station
	} catch (err) {
		logger.error(`while finding car ${stationId}`, err)
		throw err
	}
}

async function remove(stationId) {
	try {
		const collection = await dbService.getCollection('Station')
		const { deletedCount } = await collection.deleteOne({ _id: ObjectId.createFromHexString(stationId) })
        return deletedCount
	} catch (err) {
		logger.error(`cannot remove car ${stationId}`, err)
		throw err
	}
}

async function add(station) {
	try {
		const collection = await dbService.getCollection('Station')
		await collection.insertOne(station)
		return station
	} catch (err) {
		logger.error('cannot insert station', err)
		throw err
	}
}

async function update(station) {
	try {
		// const stationToSave = {
		// 	vendor: car.vendor,
		// 	price: car.price,
		// }
		const collection = await dbService.getCollection('Station')
		await collection.updateOne({ _id: ObjectId.createFromHexString(station._id) }, { $set: stationToSave })
		return station
	} catch (err) {
		logger.error(`cannot update car ${station._id}`, err)
		throw err
	}
}

async function addStationMsg(stationId, msg) {
	try {
		msg.id = utilService.makeId()

		const collection = await dbService.getCollection('Station')
		await collection.updateOne({ _id: ObjectId.createFromHexString(stationId) }, { $push: { msgs: msg } })
		return msg
	} catch (err) {
		logger.error(`cannot add car msg ${stationId}`, err)
		throw err
	}
}

async function removeStationMsg(stationId, msgId) {
	try {
		const collection = await dbService.getCollection('Station')
		await collection.updateOne({ _id: ObjectId.createFromHexString(stationId) }, { $pull: { msgs: { id: msgId }}})
		return msgId
	} catch (err) {
		logger.error(`cannot add car msg ${stationId}`, err)
		throw err
	}
}