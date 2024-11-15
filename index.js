const jsonServer = require('json-server'); 


const EMPserver = jsonServer.create();
const middlewares = jsonServer.defaults();
const PORT = 3000
const route = jsonServer.router('db.json')


EMPserver.use(middlewares);
EMPserver.use(route);

EMPserver.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
});
