import { Event } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../lib/primsa';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Event>
) {

  if (req.method === 'GET') {
    const result = await prisma.event.findUnique({
      where: {
        id: 1
      }
    });
    res.status(200).json(result);
  }
  else if (req.method === 'POST') {
    const result = await prisma.event.update({
      where: {
        id: 1
      },
      data: {
        eventName: req.body.eventName,
        roundInformation: req.body.roundInformation,
        format: req.body.format,
      }
    });
    return res.status(200).json(result);
  }
}
