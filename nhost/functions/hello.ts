import {NextApiRequest, NextApiResponse} from "next";

export default (req: NextApiRequest,
                res: NextApiResponse) => {
  res.status(200).send(`Hullo, ${req.query.name}!`)
}
