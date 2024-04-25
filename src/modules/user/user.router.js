import { Router } from "express";
import * as usercontroller from "./user.controller.js";
import { asyncHandler } from "../../utils/errorHandling.js";
import upload from "../../utils/multer.js";

const router = Router();
router.get('/profile',asyncHandler(usercontroller.profile));
router.patch('/profilePic',upload().single('image'),asyncHandler(usercontroller.Uploadimg));
export default router;