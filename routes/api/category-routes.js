const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
    const categories = await Category.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
try {
  const category = await Category.findByPk(req.params.id, {
    include: [{ model: Product }],
  });
  if (!category) {
    res.status(404).json({ message: 'No category found with this id!'});
    return;
  }

  res.status(200).json(category);
} catch (err) {
  console.error(err);
  res.status(500).json({message: 'An error occured while fetching the category!', error: err.message });
}
});

router.post('/', async (req, res) => {
  try {
    const newCategory = await Category.create(req.body);
    res.status(201).json(newCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const updatedCategory = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!updatedCategory[0]) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }
    res.status(200).json(updatedCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const result = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!result) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }

    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
