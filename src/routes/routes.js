const express = require("express");
const {
  addBooks,
  allBooks,
  bookbyId,
  bookUpdate,
  bookDelete,
} = require("../controller/bookController");
const router = express.Router();

router.post("/addbook",addBooks)
router.get("/allbook",allBooks)
router.get("/book/:id",bookbyId)
router.put("/updatebook/:id",bookUpdate);
router.delete('/deletebook/:id',bookDelete);

module.exports=router