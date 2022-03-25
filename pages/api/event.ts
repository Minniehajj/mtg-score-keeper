import type { NextApiRequest, NextApiResponse } from 'next'
type Data = {
  eventName: string,
  roundInformation: string,
  format: string,
}

let objectState = {
  eventName: '',
  roundInformation: '',
  format: '0-0',
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  if (req.method === 'GET') {
    res.status(200).json(objectState);
  }
  else if (req.method === 'POST') {
    objectState = req.body;
    return res.status(200).json(req.body);
  }
}
