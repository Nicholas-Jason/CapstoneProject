var express = require("express");
var router = express.Router();

var ItemController = require("../controllers/ItemController.js");

router.get("/getItems",ItemController.GetItemFromDb);
router.get("/getItemById/:id",ItemController.GetItemById)
router.post("/storeItem",ItemController.StoreItemInfo);
router.put("/updateItem",ItemController.UpdateItemInfo);
router.delete("/deleteItemById/:id",ItemController.DeleteItemInfo);

module.exports = router;