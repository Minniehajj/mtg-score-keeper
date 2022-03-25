import type { NextApiRequest, NextApiResponse } from 'next'
type Data = {
  name: string,
  archetype: string,
  record: string,
  lifeTotal: string,
}
let objectState = {
  name: '',
  archetype: '',
  record: '0-0',
  lifeTotal: '20',
  gameScore: '0',
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
