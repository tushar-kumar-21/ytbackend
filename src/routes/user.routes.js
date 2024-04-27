import { Router } from "express";
import {
    getAllUsers,
    loginUser,
    logoutUser,
    refreshAccessToken,
    registerUser
} from "../controllers/user.controller.js";
import { upload } from '../middlewares/multer.middleware.js'
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/register").post(
    upload.fields([
        {
            name: "avatar",
            maxCount: 1
        },
        {
            name: 'coverImage',
            maxCount: 1
        }
    ]),
    registerUser)

router.route("/login").post(loginUser)

//secured routes
router.route("/logout").post(verifyJWT, logoutUser)
router.route("/refresh-token").post(verifyJWT, refreshAccessToken)
router.route("/getAllUsers").get(getAllUsers);


export default router;