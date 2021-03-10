# Car Shopping List
Add, edit or remove car of you choice.

### JSON-SERVER.
Running on fake REST API on back-end

### React-Routers & Redux
React-Router is used for routes and redux for state management

# How To Use
Clone the repository
```
$ git clone https://github.com/xnick7x/car-list_json-server.git
```
Move into cloned repository folder
```
$ cd car-list_json-server
```
Install dependencies

!note : If you can't or don't want to install json-server globally, you can update server script in package.json file to 'npx json-server --port 3001 --watch db.json'
```
$ npm install
$ npm install -g json-server
```
Run the app (the dev script will run front-end and json-server concurrently)
```
$ npm run dev
```
Front-end runs on PORT 3000 and the server on PORT 3001.

use ```$ npm start``` to run only front-end.

and ```$ npm run server``` for only server.
