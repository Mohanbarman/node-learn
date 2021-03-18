import express from 'express';
import path from 'path';
// Routes
import { HomeRoute } from './src/Routes/Home';
import { MembersRoute } from './src/Routes/Members';
// Middlewares
import { LoggerMiddleware } from './src/Middlewares/Logger';


export const app = express();
const PORT: number = Number(process.env.PORT) || 8080;

// Setting static folder
app.use(express.static(path.join(__dirname, 'public')));

// Registering middlewares
app.use(LoggerMiddleware);

// Registering routes
app.get('/', HomeRoute);
app.get('/members/:id', MembersRoute);

app.listen(PORT, '0.0.0.0', () => {
    console.log('server started on port', PORT);
});