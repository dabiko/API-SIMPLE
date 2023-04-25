import express from 'express';
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import compression from "compression";

import userRoutes from './src/routes/user.routes.js';
import mainRoutes from "./src/routes/main.routes.js";


const app = express();
const port = 3000;
const hostname = 'http://localhost';

const limiter = rateLimit(
    {
        windowMs: 60 * 1000, //1 minutes
        max: 100, // Limit each IP to 100 request per `window` (here, per 15 minutes)
        //standardHeaders: true, // return rate limit info in the `RateLimit-*` headers
        //legacyHeaders: false, // Disable the    `X-RateLimit-*` headers
    }
);


app.use(compression())
// Apply the rate limiting middleware to API calls only
app.use(limiter)
app.use(express.json());
app.use(helmet());

app.use('/v1', mainRoutes);
app.use('/v1/user', userRoutes);

app.listen(port, () => {
    console.log(`Server listening on ${hostname}:${port}`);
});
