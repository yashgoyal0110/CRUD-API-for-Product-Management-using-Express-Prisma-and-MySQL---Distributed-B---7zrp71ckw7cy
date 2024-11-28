const express = require("express");
const createProduct = require("../controllers/createController");
const getAllProducts = require("../controllers/getAllController");
const getProduct = require("../controllers/getProductController");
const fullUpdate = require("../controllers/fullUpdateController");
const partialUpdate = require("../controllers/partialUpdateController");
const deleteProduct = require("../controllers/deleteController");
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();
router.post("/create", createProduct);
router.get("/get", getAllProducts);
router.get("/getById/:id", getProduct);
router.put("/put/:id", authMiddleware, fullUpdate);
router.patch("/patch/:id", authMiddleware, partialUpdate);
router.delete("/delete/:id", authMiddleware,deleteProduct);

module.exports = router;
