const express = require('express');
const booksController = require('../controllers/BooksController');
const authorsController = require('../controllers/AuthorsController');
const healthcheckRoute = require('./healthcheck'); // ✅ Import healthcheck

const router = express.Router();

// ✅ Healthcheck route
router.use(healthcheckRoute);

router.get('/authors', authorsController.get);
router.post('/authors', authorsController.create);
router.put('/authors/:id', authorsController.update);
router.delete('/authors/:id', authorsController.delete);

router.get('/books', booksController.get);
router.post('/books', booksController.create);
router.put('/books/:id', booksController.update);
router.delete('/books/:id', booksController.delete);

router.get('/ping', (req, res) => {
  res.send('pong');
});

module.exports = router;
