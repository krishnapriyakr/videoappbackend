//import json-server in index.js file

const jsonServer = require('json-server')

//create a server for json file

const mediaPlayerserver = jsonServer.create()

//set up a path for json file

const router = jsonServer.router('db.json')
 
// return a midleware used by json server
const middlewares = jsonServer.defaults()
 
//set up port for running server

const port = 4000 || process.env.port

//use middleware & router in server

mediaPlayerserver.use(middlewares)
mediaPlayerserver.use(router)

// to listen server for resolving request from server

mediaPlayerserver.listen(port, () => {
    console.log(`mediaPlayer listening at port ${port},and waiting for client request!!`);
})
