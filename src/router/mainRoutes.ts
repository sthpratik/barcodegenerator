import express from 'express';
import { welcomePage,aboutPage } from '../controller/mainController';

const routes = express.Router()

// middleware that is specific to this router
routes.use((req, res, next) => {
  console.log('Time Test: ', Date.now());
  next();
})
// define the home page route
routes.get('/', welcomePage)


// define the about route
routes.get('/about', aboutPage)


export {routes}


