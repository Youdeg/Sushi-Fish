import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function getProductsByTypeHandler(req: NextApiRequest, res: NextApiResponse) {
  const { types } = req.body;

  const products = await prisma.product.findMany({
    where: {
        type: {
            in: types
        }
    }
  });
  
  res.json(products);
}

export default getProductsByTypeHandler;