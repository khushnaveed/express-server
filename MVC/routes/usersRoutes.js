import {
  gettAllUsers,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/usersControllers.js";

import { Router } from "express";

const router = Router();

//get users
router.get("/", gettAllUsers);

//post user
router.post("/", createUser);

//patch users
router.patch("/:id/:name", updateUser);

//delete users
router.delete("/:id", deleteUser);


export default router;