import express from 'express';
import {brewCoffee,setBrewStep,getBrewStatus} from '../controller/brewController.js'
const router=express();
router.post('/brew/step',setBrewStep);
router.get("/brew/status",getBrewStatus);

export default router;