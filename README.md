# Hello World Express API

My first api in Express (Node) .

## Installation

Download this repository and run:

    npm install


## Running

To start a web server for the application at port 3000, run:

    npm start

## Usage

Example of a valid API request using cURL:

- To retrieve just one user:

       curl "https://fierce-stream-73219.herokuapp.com/user/"

- To retrieve just more than one user, you should specify a limit:

       curl "https://fierce-stream-73219.herokuapp.com/users/limit/:number"

The API uses JSON to serialize data. You don't need to specify .json at the
end of an API URL.

## Testing

Run tests with command `npm test`.

## License

Copyright &copy; 2017 Stefanie Melo
