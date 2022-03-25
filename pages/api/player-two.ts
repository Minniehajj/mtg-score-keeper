import { Player } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../lib/primsa';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Player>
) {

  if (req.method === 'GET') {
    const result = await prisma.player.findUnique({
      where: {
        id: 2
      }
    });
    res.status(200).json(result);
  }
  else if (req.method === 'POST') {
    const result = await prisma.player.update({
      where: {
        id: 2
      },
      data: {
        name: req.body.name,
        archetype: req.body.archetype,
        record: req.body.record,
        lifeTotal: req.body.lifeTotal,
        gameScore: req.body.gameScore,
      }
    });
    return res.status(200).json(result);
  }
}
