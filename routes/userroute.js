import express from "express";
import {
  registeruser,
  loginuser,
  getmyquizes,
  logoutuser,
  getuser,
} from "../controllers/usercontroller.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

router.route("/createuser").post(registeruser);
router.route("/login").post(loginuser);
router.route("/myquizes").get(protect, getmyquizes);
router.route("/logout").delete(protect, logoutuser);
router.route("/getuser").get(protect, getuser);// added a / in route
export default router;
