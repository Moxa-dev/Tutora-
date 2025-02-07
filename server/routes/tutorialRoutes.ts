import express, { Router } from 'express';
import tutorialController from '../controllers/ tutorialController.ts'

const router: Router = express.Router();

/**
 * @route   POST /api/tutorials
 * @desc    Create a new tutorial
 * @access  Public
 */
router.post('/', tutorialController.createTutorial);

/**
 * @route   GET /api/tutorials
 * @desc    Get all tutorials
 * @access  Public
 */
router.get('/', tutorialController.getAllTutorials);

/**
 * @route   GET /api/tutorials/category/:category
 * @desc    Get tutorials filtered by category
 * @access  Public
 */
router.get('/category/:category', tutorialController.getTutorialsByCategory);

/**
 * @route   PUT /api/tutorials/:id
 * @desc    Update a tutorial by ID
 * @access  Public
 */
router.put('/:id', tutorialController.updateTutorial);

/**
 * @route   DELETE /api/tutorials/:id
 * @desc    Delete a tutorial by ID
 * @access  Public
 */
router.delete('/:id', tutorialController.deleteTutorial);

export default router;