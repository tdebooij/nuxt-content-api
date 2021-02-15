import { Router } from "express";
import { OPTIONS, ModuleOptions } from "../options";
import auth from "../middleware/auth";

const router = Router();

/* GET content. */
router.get("/api/content-api/:filename", auth, function (req, res, next) {
  const options: ModuleOptions = req.app.get(OPTIONS);

  res.json({ name: req.params.filename, ...options });
});

export default router;
