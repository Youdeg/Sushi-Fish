import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function getProductsHandler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.body;

  console.log(id);

  const products = await prisma.product.findMany({
    where: id ? { id: { in: id } } : {},
  });
  res.json(products);
}

export default getProductsHandler;
