import Faker from 'faker';

const AppRouter = (app) => {
  app.get("/", (req, res) =>{
    res.status(200).send("My first express api!");
  });

  app.get("/users", (req, res) =>{
    const data = {
      firstName: Faker.name.firstName(),
      lastName: Faker.name.lastName(),
      username: Faker.internet.userName(),
      email: Faker.internet.email()
    };
    res.status(200).send(data);
  });
}

export default AppRouter;
