import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../utils/prisma";

type Data = {
  message?: string;
  school?: any;
  success: boolean;
  error?: string;
};

const School = prisma.school;

const registerSchool = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  try {
    console.log(req.body);
    const { name, address, city } = req.body;

    const school = await School.findUnique({
      where: {
        name,
      },
    });

    console.log(school);

    if (school) {
      return res
        .status(409)
        .json({ message: "School already exists", success: false });
    }

    const newSchool = await School.create({
      data: {
        name,
        address,
        city,
      },
    });

    res.status(200).json({ school: newSchool, success: true });
  } catch (error: any) {
    console.log(error);
    res.status(500).json({ error, success: false });
  }
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    return await registerSchool(req, res);
  } else {
    return res
      .status(405)
      .json({ message: "Method not allowed", success: false });
  }
};

export default handler;
