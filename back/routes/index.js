var express = require("express");
var router = express.Router();

const usersCollection = require("../models/Users");
const productsCollection = require("../models/Products");

/* LIST OF COLLECTIONS. */

router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});
/*Get List of collections. */
router.get("/get-user", async (req, res, next) => {
  let response = await usersCollection.find();
  res.json(response);
});
router.post("/login", async (req, res, next) => {
  const { email, password} = req.body;
  let response = await usersCollection.findOne({ email: email, password: password});
  res.json(response);
});
router.get("/get-product", async (req, res, next) => {
  let response = await productsCollection.find();
  res.json(response);
});
router.post("/get-user", async (req, res, next) => {
  let response = await usersCollection.find();
  res.json(response);
});
router.post("/get-product", async (req, res, next) => {
  let response = await productsCollection.find();
  res.json(response);
});

/*Update List of collections. */
router.post("/new-user", async (req, res, next) => {
  const { name, lastName, email, password, isAdmin, isActivate } = req.body;
  const userCol = new usersCollection({
    name,
    lastName,
    email,
    password,
    isAdmin,
    isActivate,
  });
  await userCol.save();
  res.send("User registry is completed");
});
router.post("/new-product", async (req, res, next) => {
  const {
    p_SKU,
    p_name,
    p_description,
    p_category,
    categoryId,
    categoryName,
    p_value,
    p_image,
    p_brand,
    discounts,
    is_discounted,
    discount_percent,
  } = req.body;
  const prodCol = new productsCollection({
    p_SKU,
    p_name,
    p_description,
    p_category,
    categoryId,
    categoryName,
    p_value,
    p_image,
    p_brand,
    discounts,
    is_discounted,
    discount_percent,
  });
  await prodCol.save();
  res.send("Product registry is completed");
});

/*Update List of collections. */
router.patch("/update-user/:id", async (req, res, next) => {
  const { name, lastName, email, password, isAdmin, isActivate } = req.body;
  const userCol = {
    name,
    lastName,
    email,
    password,
    isAdmin,
    isActivate,
  };
  await usersCollection.findByIdAndUpdate(req.params.id,userCol);
  res.send(req.params.id);
  res.send("User update is completed");
});
router.patch("/update-product/:id", async (req, res, next) => {
  const {
    p_SKU,
    p_name,
    p_description,
    p_category,
    categoryId,
    categoryName,
    p_value,
    p_image,
    p_brand,
    discounts,
    is_discounted,
    discount_percent,
  } = req.body;
  const prodCol = {
    p_SKU,
    p_name,
    p_description,
    p_category,
    categoryId,
    categoryName,
    p_value,
    p_image,
    p_brand,
    discounts,
    is_discounted,
    discount_percent,
  };
  await productsCollection.findByIdAndUpdate(req.params.id,prodCol);
  res.send("Product update is completed");
});
/*Delete List of collections. */
router.delete("/delete-user/:id", async (req, res, next) => {
  await usersCollection.findByIdAndRemove(req.params.id);
  res.send("Hasta la vista baby");
});
router.delete("/delete-product/:id", async (req, res, next) => {
  await productsCollection.findByIdAndRemove(req.params.id);
  res.send("Producto descontinuado");
});
module.exports = router;
