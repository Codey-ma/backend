const express = require('express');

const router = express.Router();

const courseController = require('../controllers/course');

router.get('/', courseController.getCourses);
router.get('/tags', courseController.getCourseByTags);
router.get('/title', courseController.getCourseByTitleAndCategory);
router.get('/:id', courseController.getCourse);
router.post('/', courseController.createCourse);
router.put('/:id', courseController.updateCourse);
router.delete('/:id', courseController.deleteCourse);

module.exports = router;