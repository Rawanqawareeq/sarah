import { Router } from "express";
import * as usercontroller from "./user.controller.js";
import { asyncHandler } from "../../utils/errorHandling.js";

const router = Router();
router.get('/profile',asyncHandler(usercontroller.profile));

export default router;