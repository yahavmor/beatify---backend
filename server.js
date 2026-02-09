// import express from 'express'
// import cookieParser from 'cookie-parser'
// import cors from 'cors'
// import path from 'path'
// import { fileURLToPath } from 'url'
// import { logger } from './services/logger.service.js'
// import axios from 'axios'
// import { authRoutes } from './api/auth/auth.routes.js'
// import { userRoutes } from './api/user/user.routes.js'
// import { stationRoutes } from './api/station/station.routes.js'

// import { createServer } from 'http'
// import { Server } from 'socket.io'
// import { setupSocketAPI } from './services/socket.service.js'

// const app = express()

// const httpServer = createServer(app)


// app.use(express.json({ limit: '50mb' }))
// app.use(express.urlencoded({ extended: true }))
// app.use(cookieParser())


// app.use(cors({
//     origin: true,
//     credentials: true
// }))

// app.get('/api/deezer', async (req, res) => {
//     try {
//         const { url } = req.query
//         console.log('Proxying request to Deezer:', url)

//         if (!url) return res.status(400).send('URL is required')

//         const response = await axios.get(url)
//         res.json(response.data)
//     } catch (err) {
//         console.error('Error in Deezer proxy route:', err.message)
//         res.status(500).json({ error: 'Failed to fetch from Deezer', details: err.message })
//     }
// })
// app.use('/api/auth', authRoutes)
// app.use('/api/user', userRoutes)
// app.use('/api/station', stationRoutes)


// setupSocketAPI(httpServer)

// const __filename = fileURLToPath(import.meta.url)
// const __dirname = path.dirname(__filename)

// app.use(express.static(path.resolve(__dirname, 'dist')))

// app.get('*all', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
// })

// const port = process.env.PORT || 3030
// httpServer.listen(port, () => logger.info(`Server running on port: ${port}`))


import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url'
import { logger } from './services/logger.service.js'
import axios from 'axios'
import { authRoutes } from './api/auth/auth.routes.js'
import { userRoutes } from './api/user/user.routes.js'
import { stationRoutes } from './api/station/station.routes.js'

import { createServer } from 'http'
import { setupSocketAPI } from './services/socket.service.js'

const app = express()
const httpServer = createServer(app)

app.use(express.json({ limit: '50mb' }))
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

const corsOptions = {
    origin: [
        'http://127.0.0.1:5173',
        'http://localhost:5173',
        'https://beatproject.vercel.app'
    ],
    credentials: true
}
app.use(cors(corsOptions))
app.use(session({
    secret: 'your-secret',
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: true,
        sameSite: 'none',
        httpOnly: true
    }
}))
// Deezer Proxy
app.get('/api/deezer', async (req, res) => {
    try {
        const { url } = req.query
        if (!url) return res.status(400).send('URL is required')
        const response = await axios.get(url)
        res.json(response.data)
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch from Deezer' })
    }
})

// Routes
app.use('/api/auth', authRoutes)
app.use('/api/user', userRoutes)
app.use('/api/station', stationRoutes)

setupSocketAPI(httpServer)

// הערה: הסרנו את הקוד שמגיש קבצים סטטיים (dist) כי הם עברו ל-Vercel.
// זה מה שיעזור לנקות את החסימה של גוגל ב-Render.

const port = process.env.PORT || 3030
httpServer.listen(port, () => logger.info(`Server running on port: ${port}`))