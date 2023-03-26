//import{ } from '../services'
import { Request, Response } from 'express';



const welcomePage = (req:Request, res:Response) => {
  const params = req.params; 
  res.render('index', { title: 'Express' });
};

const aboutPage = (req:Request, res:Response) => {
  const params = req.params; 
  res.render('about', { title: 'About' });
};




export {welcomePage,aboutPage}