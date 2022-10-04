import { Handler } from "../types";

export const home: Handler = (req: any, res: any) => {
  res.send("Hello world-Home");
};
