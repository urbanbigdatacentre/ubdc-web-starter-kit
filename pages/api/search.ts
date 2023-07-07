// Search endpoint - to be replaced with better search engine later

import { NextApiRequest, NextApiResponse } from 'next';


const docs = require('../../cache/data').docs;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const q = req?.query?.search ? req.query.search : '';

  const results = q ? docs.map((doc: any) => {

      const index = doc.content.toLowerCase().indexOf(q.toString().toLowerCase());

      if (index !== -1) {
        return {
          ...doc,
          content: doc.content.slice(index - 15, index + 15),
        };
      } else {
        return null;
      }


  }) : [];

  const filteredResults = results.filter((result: any) => result !== null);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(filteredResults));

}