// userRoutes.ts
import express, { Request } from "express";
import { populationData, findPopulation } from "../functions/prefectures";

const router = express.Router();

/**
 * @swagger
 * /population/{code}:
 *   get:
 *     summary: Get population by prefecture code
 *     parameters:
 *       - in: path
 *         name: code
 *         description: Prefecture code
 *         required: true
 *         schema:
 *           type: string
 *           enum: [01, 02, 47]
 *     responses:
 *       200:
 *         description: Successful response with population data
 *         schema:
 *           type: object
 *           properties:
 *             code:
 *               type: string
 *               description: Prefecture code
 *             population:
 *               type: number
 *               description: Population of the prefecture
 *       404:
 *         description: Prefecture not found
 *         schema:
 *           type: object
 *           properties:
 *             error:
 *               type: string
 *               description: Error message
 */
router.get(
  "/:code",
  (req: Request<{ code: keyof typeof populationData }>, res) => {
    const { code } = req.params;
    const population = findPopulation(code);

    if (population !== null) {
      res.status(200).json({ code, population: population });
    } else {
      res.status(404).json({ error: "Prefecture not found" });
    }
  }
);

export default router;
