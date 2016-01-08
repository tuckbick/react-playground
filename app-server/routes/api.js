import express from 'express';

const router = express.Router();

router.get('/n/recent', (req, res) => {
  res
    .status(200)
    .json([
      {id: 'abc123'},
      {id: 'abc456'},
      {id: 'abc789'},
      {id: 'abc012'},
      {id: 'abc345'},
    ])
});

router.get('/n/:id', (req, res) => {
  res
    .status(200)
    .json({
      name: `test note ${req.params.id}`,
      id: req.params.id
    });
});

export default router;
