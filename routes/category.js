const express = require("express");
const router = express.Router();
const db = require("../models/index");

const Category = db.Category;

//Getting all
router.get("/", async (req, res) => {
  try {
    const categories = await Category.findAll({ include: [Category] });
    res.json(categories);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Getting by parent
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const categoryLayer = await Category.findAll({
      where: {
        CategoryId: id,
      },
    });
    res.json(categoryLayer);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Creating one
router.post("/create", async (req, res) => {
  try {
    const createdCategory = await Category.create({
      title: req.body.title,
      CategoryId: req.body.CategoryId,
      is_deleted: req.body.is_deleted,
    });
    res.json(createdCategory);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.patch("/:id", async (req, res) => {
  const id = req.params.id;
  const { title } = req.body;
  try {
    const category = await Category.findOne({ where: { id } });

    category.title = title;

    await category.save();

    res.json(category);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.patch("/delete/:id", async (req, res) => {
  const id = req.params.id;
  const { is_deleted } = req.body;
  try {
    const category = await Category.findOne({ where: { id } });

    category.is_deleted = is_deleted;

    await category.save();

    res.json(category);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
