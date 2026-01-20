
// import { storageService } from './async-storage.service.js'
import { httpService } from './http.service.js'
import { utilService } from './util.service.js'
import { userService } from './user.service.js'


const STORAGE_KEY = 'station'

export const stationService = {
    query,
    getById,
    save,
    remove,
    getEmptyStation,
    addStationMsg
}
window.cs = stationService


async function query(filterBy = { txt: '', price: 0 }) {
    return httpService.get(STORAGE_KEY, filterBy)

    // var cars = await storageService.query(STORAGE_KEY)
    // if (filterBy.txt) {
    //     const regex = new RegExp(filterBy.txt, 'i')
    //     cars = cars.filter(car => regex.test(car.vendor) || regex.test(car.description))
    // }
    // if (filterBy.price) {
    //     cars = cars.filter(car => car.price <= filterBy.price)
    // }
    // return cars

}
function getById(stationId) {
    // return storageService.get(STORAGE_KEY, carId)
    return httpService.get(`station/${stationId}`)
}

async function remove(stationId) {
    // await storageService.remove(STORAGE_KEY, carId)
    return httpService.delete(`station/${stationId}`)
}
async function save(station) {
    var savedStation
    if (station._id) {
        // savedCar = await storageService.put(STORAGE_KEY, car)
        savedStation = await httpService.put(`station/${station._id}`, station)

    } else {
        // Later, owner is set by the backend
        // car.owner = userService.getLoggedinUser()
        // savedCar = await storageService.post(STORAGE_KEY, car)
        savedStation = await httpService.post('station', station)
    }
    return savedStation
}

async function addStationMsg(stationId, txt) {
    // const car = await getById(carId)
    // if (!car.msgs) car.msgs = []

    // const msg = {
    //     id: utilService.makeId(),
    //     by: userService.getLoggedinUser(),
    //     txt
    // }
    // car.msgs.push(msg)
    // await storageService.put(STORAGE_KEY, car)    
    const savedMsg = await httpService.post(`station/${stationId}/msg`, {txt})
    return savedMsg
}


function getEmptyStation() {
    return {
        vendor: 'Susita-' + (Date.now() % 1000),
        price: utilService.getRandomIntInclusive(1000, 9000),
    }
}





