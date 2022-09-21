import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../utils/prisma";

type Data = {
  views?: string;
  error?: any;
  success?: boolean;
};

(BigInt.prototype as any).toJSON = function () {
  return this.toString();
};

const Views = prisma.views;

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (req.method === "GET") {
    try {
      const views = await Views.findUnique({
        where: {
          id: 1,
        },
      });

      res.status(200).json({ views: views?.count.toString() });
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  if (req.method === "POST") {
    await registerView(req, res);
  }
};

const registerView = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const views = await Views.upsert({
      where: {
        id: 1,
      },
      update: {
        count: {
          increment: 1,
        },
      },
      create: {
        id: 1,
        count: 1,
      },
    });

    res.status(200).json({ views: views.count, success: true });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};

export default handler;
