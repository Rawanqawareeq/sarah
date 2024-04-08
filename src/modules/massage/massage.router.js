import { Router } from "express";
import * as MassageController from "./massage.controller.js";
import auth from "../../middleware/auth.middleware.js";

const router = Router();
router.get('/',auth,MassageController.getMassage);
router.post('/:receverId',MassageController.sendMassage);
export default router;