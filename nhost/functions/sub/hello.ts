import {NextApiRequest, NextApiResponse} from "next";

export default (req: NextApiRequest,
                res: NextApiResponse) => {
  res.status(200).send(`Hello from a subdirectory, ${req.query.name}!`)
}
