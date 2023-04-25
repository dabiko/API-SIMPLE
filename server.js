import express from 'express';
import userRoutes from './src/routes/user.routes.js';
import mainRoutes from "./src/routes/main.routes.js";

const app = express();
const port = 3000;
const hostname = 'http://localhost';

app.use(express.json());

app.use('/v1', mainRoutes);
app.use('/v1/user', userRoutes);

app.listen(port, () => {
    console.log(`Server listening on ${hostname}:${port}`);
});
