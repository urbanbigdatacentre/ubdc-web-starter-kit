import {NextApiRequest, NextApiResponse} from "next";

export default (req: NextApiRequest,
                res: NextApiResponse) => {
  res.status(200).send(`Index function in a sub-directory`)
}
