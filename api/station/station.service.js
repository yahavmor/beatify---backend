import { ObjectId } from 'mongodb'
import { dbService } from '../../services/db.service.js'
import { utilService } from '../../services/util.service.js'
import { logger } from '../../services/logger.service.js'
import { userService } from '../user/user.service.js'


export const stationService = {
    query,
    getById,
    add,
    update,
    remove,
    addStationMsg,
    removeStationMsg,
    addSong,
    removeSong,
    toggleLikeStation,
    getLikedSongsStation,
    likeSong,
    removeLikeSong
}

async function query() {
    const collection = await dbService.getCollection('Station')
    return collection.find().toArray()
}

async function getById(stationId) {
    const collection = await dbService.getCollection('Station')
    const station = await collection.findOne({ _id: ObjectId.createFromHexString(stationId) })
    return station
}

async function add(station) {
    const collection = await dbService.getCollection('Station')
    await collection.insertOne(station)
    return station
}

async function update(station) {
    const stationToSave = { ...station }
    delete stationToSave._id

    const collection = await dbService.getCollection('Station')
    await collection.updateOne(
        { _id: ObjectId.createFromHexString(station._id) },
        { $set: stationToSave }
    )
    return station
}

async function remove(stationId) {
    const collection = await dbService.getCollection('Station')
    const { deletedCount } = await collection.deleteOne({ _id: ObjectId.createFromHexString(stationId) })
    return deletedCount
}

async function addStationMsg(stationId, msg) {
    msg.id = utilService.makeId()

    const collection = await dbService.getCollection('Station')
    await collection.updateOne(
        { _id: ObjectId.createFromHexString(stationId) },
        { $push: { msgs: msg } }
    )
    return msg
}

async function removeStationMsg(stationId, msgId) {
    const collection = await dbService.getCollection('Station')
    await collection.updateOne(
        { _id: ObjectId.createFromHexString(stationId) },
        { $pull: { msgs: { id: msgId } } }
    )
    return msgId
}

async function addSong(stationId, song) {
    const formattedSong = {
        id: song.id || Date.now(), 
        title: song.title || 'Untitled Song',
        imgUrl: song.imgUrl || '',
        src: song.src || ''
    }

    const collection = await dbService.getCollection('Station')
    await collection.updateOne(
        { _id: ObjectId.createFromHexString(stationId) },
        { $push: { songs: formattedSong } }
    )

    return getById(stationId)
}


async function removeSong(stationId, songId) {
    const collection = await dbService.getCollection('Station')
    await collection.updateOne(
        { _id: ObjectId.createFromHexString(stationId) },
        { $pull: { songs: { id: +songId } } }   
    )
    return getById(stationId)
}


async function toggleLikeStation(stationId, user) {
    const collection = await dbService.getCollection('Station')

    const station = await getById(stationId)
    const isLiked = station.likedByUsers?.some(u => u._id === user._id)

    await collection.updateOne(
        { _id: ObjectId.createFromHexString(stationId) },
        isLiked
            ? { $pull: { likedByUsers: { _id: user._id } } }
            : { $push: { likedByUsers: user } }
    )

    return getById(stationId)
}

async function getLikedSongsStation(userId) {
    const collection = await dbService.getCollection('Station')

    const stations = await collection.find({ likedByUsers: { $elemMatch: { _id: userId } } }).toArray()

    return {
        _id: 'likedSongs',
        name: 'Liked Songs',
        songs: stations.flatMap(st => st.songs),
        likedByUsers: [],
        createdBy: { _id: userId }
    }
}
async function likeSong(stationId, songId, user) {
    const station = await getById(stationId)
    if (!station) throw new Error('Station not found')
    const song = station.songs.find(s => s.id === songId)
    if (!song) throw new Error('Song not found')
    const userCollection = await dbService.getCollection('User')
    const alreadyLiked = user.likedSongsStations?.some(s => s.id === songId)
    if (alreadyLiked) {
        return userService.getById(user._id)
    }
    await userCollection.updateOne(
        { _id: ObjectId.createFromHexString(user._id) },
        { $push: { likedSongsStations: song } }
    )

    return userService.getById(user._id)
}

async function removeLikeSong(stationId, songId, user) {
    const userCollection = await dbService.getCollection('User')

    await userCollection.updateOne(
        { _id: ObjectId.createFromHexString(user._id) },
        { $pull: { likedSongsStations: { id: songId } } }
    )

    return userService.getById(user._id)
}

