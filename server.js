import Express from 'express';
import BodyParser from 'body-parser';
import AppRouter from './routes/routes';

const server = Express();

server.use(BodyParser.json());
server.use(BodyParser.urlencoded({ extended: true }));

AppRouter(server);

server.listen(3000, () => console.log("App running on port:", server.address().port));
