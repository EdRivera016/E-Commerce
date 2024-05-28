const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  try {
    const tags = await Tag.findAll({
      include: [
        {
          model: Product,
          through: ProductTag,
        },
      ],
    });
    res.status(200).json(tags);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const tag = await Tag.findByPk(req.params.id, {
      include: [
        {
          model: Product,
          through: ProductTag,
        },
      ],
    });

    if (!tag) {
      res.status(404).json({ message: 'No tag found with thi id!' });
      return;
    }

    res.status(200).json(tag);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const tag = await Tag.create(req.body);
    res.status(200).json(tag);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
try {
  const updatedTag = await Tag.update(req.body, {
    where: {
      id: req.params.id,
    },
  });

  if (!updatedTag) {
    res.status(404).json({ message: 'No tag found with this id!' });
    return;
  }
  
  res.status(200).json(updatedTag);
} catch (err) {
res.status(400).json(err);
}
});

router.delete('/:id', async (req, res) => {
  try {
    const result = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });

    if(!result) {
      res.status(404).json({ message: 'No tag found with this id!' });
      return;
    }
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
