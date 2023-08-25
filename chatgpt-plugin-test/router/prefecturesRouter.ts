// userRoutes.ts
import express from "express";
import { prefectures } from "../functions/prefectures";

const router = express.Router();

/**
 * @swagger
 * /prefectures:
 *   get:
 *     summary: Get a list of all prefectures
 *     responses:
 *       200:
 *         description: Successful response with a list of prefectures
 *         schema:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               code:
 *                 type: string
 *                 description: Prefecture code
 *               name:
 *                 type: string
 *                 description: Prefecture name
 */
router.get("/prefectures", (req, res) => {
  return res.status(200).send(prefectures);
});

export default router;
