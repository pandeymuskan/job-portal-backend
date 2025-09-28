// routes/job.routes.js
import express from'express';
const router = express.Router();

import {
  createJob,
  getAllJobs,
  getJobById,
  updateJob,
  deleteJob,
} from '../controllers/jobControllers.js';

import { protect, authorizeRoles } from '../middlewares/auth.js';

// Public
router.get('/', getAllJobs);
router.get('/:id', getJobById);

// Employer-only
router.post('/', protect, authorizeRoles('employer'), createJob);
router.put('/:id', protect, authorizeRoles('employer'), updateJob);
router.delete('/:id', protect, authorizeRoles('employer'), deleteJob);

export default router;
