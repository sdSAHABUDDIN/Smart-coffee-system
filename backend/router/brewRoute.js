import express from 'express';
import {brewCoffee,handleBrewStep,getBrewStatus} from '../controller/brewController.js'
const router=express();
router.post('/brew/step',handleBrewStep);
router.get("/brew/status",getBrewStatus);

export default router;