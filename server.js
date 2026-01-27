import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url'
import { logger } from './services/logger.service.js'

import { authRoutes } from './api/auth/auth.routes.js'
import { userRoutes } from './api/user/user.routes.js'
import { stationRoutes } from './api/station/station.routes.js'

const app = express()

app.use(express.json({ limit: '50mb' }))
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

app.use(cors({
    origin: true,
    credentials: true
}))

app.use('/api/auth', authRoutes)
app.use('/api/user', userRoutes)
app.use('/api/station', stationRoutes)

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.use(express.static(path.resolve(__dirname, 'dist')))

app.get('*all', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
})

const port = process.env.PORT || 3030
app.listen(port, () => logger.info(`Server running on port: ${port}`))
