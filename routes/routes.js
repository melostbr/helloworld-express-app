import Faker from 'faker';
import * as _ from 'lodash';

const AppRouter = (app) => {
  app.get("/", (req, res) =>{
    res.status(200).send("My first express api!");
  });

  app.get("/user", (req, res) =>{
    const data = {
      firstName: Faker.name.firstName(),
      lastName: Faker.name.lastName(),
    };
    res.status(200).send(data);
  });

  app.get("/users/limit/:num", (req, res) =>{
    const limit = req.params.num;

    const data = _.times(limit, () =>  {
      return ({
        firstName: Faker.name.firstName(),
        lastName: Faker.name.lastName(),
      })
    });
    res.status(200).send(data);
  });
}

export default AppRouter;
