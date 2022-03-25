import type { NextApiRequest, NextApiResponse } from 'next'
type Data = {
  eventName: string,
  roundInformation: string,
  format: string,
}

let objectState3 = {
  eventName: '',
  roundInformation: '',
  format: '0-0',
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  if (req.method === 'GET') {
    res.status(200).json(objectState3);
  }
  else if (req.method === 'POST') {
    objectState3 = req.body;
    return res.status(200).json(req.body);
  }
}
