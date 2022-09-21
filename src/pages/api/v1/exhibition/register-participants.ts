import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../utils/prisma";

type Data = {
  message?: any;
  success: boolean;
  error?: string;
  registration?: any;
};

const Registration = prisma.registration;

const registerParticipants = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  try {
    const { schoolId, participantsData } = req.body;

    const registration = await Registration.create({
      data: {
        schoolId,
        participants: {
          createMany: {
            data: participantsData,
          },
        },
      },
    });

    res.status(200).json({
      message: "Registered Successfully",
      registration,
      success: true,
    });
  } catch (error: any) {
    // console.log(error);
    res.status(500).json({ error, success: false });
  }
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    return await registerParticipants(req, res);
  } else {
    return res
      .status(405)
      .json({ message: "Method not allowed", success: false });
  }
};

export default handler;
