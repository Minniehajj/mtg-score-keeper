// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import * as playerOneData from '../../public/data/player-one.json';
import fs from 'fs';
type Data = {
  name: string,
  archetype: string,
  record: string,
  lifeTotal: string,
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'GET') {
    res.status(200).json(playerOneData);
  }
  else if (req.method === 'POST') {
    fs.writeFile('././public/data/player-one.json',JSON.stringify(req.body), function(){console.log('done')})
    return res.status(200).json(req.body);
  }
}
