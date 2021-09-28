const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  updateUser,
  login,
} = require("../controllers/usersController");
/* GET users listing. */
router.get("/allUsers", getAllUsers);
router.get("/login", login);
router.post("/updateUser", updateUser);

module.exports = router;
