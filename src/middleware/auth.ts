import { NextFunction, Request, Response } from "express";

export default (req: Request, res: Response, next: NextFunction) => {
  let authToken = req.params.token;
  next();
  // if (!authToken) {
  //   res.status(403).json({ message: "Plz authenticate" }); //Status 403 means forbidden.
  // } else {
  //   // TODO: Check if the token is valid and has access to the repository
  //   next();
  // }
};
