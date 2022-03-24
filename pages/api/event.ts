// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import * as eventData from '../../public/data/event.json';
import fs from 'fs';
type Data = {
  eventName: string,
  roundInformation: string,
  format: string,
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'GET') {
    res.status(200).json(eventData);
  }
  else if (req.method === 'POST') {
    fs.writeFile('/./public/data/event.json',JSON.stringify(req.body), function(){console.log('done')})
    return res.status(200).json(req.body);
  }
}
