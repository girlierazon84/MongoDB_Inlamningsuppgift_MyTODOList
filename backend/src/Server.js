import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import Logger from './utils/Logger.js'
import MorganMiddleware from './middlewares/MorganMiddleware.js'
import Middlewares from './middlewares/Middlewares.js'
import Configuration from "./configuration/Configuration.js";
import TODORoutes from "./routes/TODORoutes.js";

const app = express();

// Middleware
app.use(helmet())
app.use(MorganMiddleware)
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(Middlewares?.errorHandler)

// define a route handler for the default home page
app.get("/", (req, res) => {
    res.send("My API is Alive!");
});

TODORoutes.routes(app)

// start the Express server
Configuration.connectToDatabase().then()
Configuration.connectToPort(app)

// Place after all valid URLs
app.use(Middlewares?.notFound)
