import { stationService } from './services/station.service.js'
import { userService } from './services/user.service.js'
import { utilService } from './services/util.service.js'

console.log('Simple driver to test some API calls')

window.onLoadStations = onLoadStations
window.onLoadUsers = onLoadUsers
window.onAddStation = onAddStation
window.onGetStationById = onGetStationById
window.onRemoveStation = onRemoveStation
window.onAddStationMsg = onAddStationMsg

async function onLoadStations() {
    const Stations = await stationService.query()
    render('Stations', Stations)
}
async function onLoadUsers() {
    const users = await userService.query()
    render('Users', users)
}

async function onGetStationById() {
    const id = prompt('Station id?')
    if (!id) return
    const station = await stationService.getById(id)
    render('Station', station)
}

async function onRemoveStation() {
    const id = prompt('Station id?')
    if (!id) return
    await carService.remove(id)
    render('Removed Station')
}

async function onAddStation() {
    await userService.login({ username: 'puki', password: 'secret' })
    const savedStation = await StationService.save(stationService.getEmptyStation())
    render('Saved Station', savedStation)
}

async function onAddStationMsg() {
    await userService.login({ username: 'puki', password: 'secret' })
    const id = prompt('Station id?')
    if (!id) return

    const savedMsg = await stationService.addStationMsg(id, 'some msg')
    render('Saved Msg', savedMsg)
}

function render(title, mix = '') {
    console.log(title, mix)
    const output = utilService.prettyJSON(mix)
    document.querySelector('h2').innerText = title
    document.querySelector('pre').innerHTML = output
}

