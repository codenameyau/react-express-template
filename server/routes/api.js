import express from 'express';

const router = express.Router();

router.get('/', (req, res, next) => {
  res.json({
    status: 200,
    message: 'Hello from Express API',
  });
});

export default router;
