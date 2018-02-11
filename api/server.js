import Express from 'express';
import BodyParser from 'body-parser';
import AppRouter from './routes/routes';

const app = Express();

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

AppRouter(app);

const server = app.listen(3000, () => console.log("App running on port:", server.address().port));

module.exports = server;
