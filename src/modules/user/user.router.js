import { Router } from "express";
import * as usercontroller from "./user.controller.js";
import { asyncHandler } from "../../utils/errorHandling.js";
import fileUpload from "../../utils/multer.js";

const router = Router();
router.get('/profile',asyncHandler(usercontroller.profile));
router.patch('/profilePic',fileUpload().single('image'),asyncHandler(usercontroller.Uploadimg));
export default router;