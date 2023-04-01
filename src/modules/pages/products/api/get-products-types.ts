import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

async function getProductsTypesHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const prisma = new PrismaClient();

  const products = await prisma.product.groupBy({
    by: ["type"],
  });

  for (const product of products) {
    const productsByType = await prisma.product.findMany({
      where: {
        type: product.type,
      },
    });

    //@ts-ignore
    product.products = productsByType;
  }

  res.json(products);
}

export default getProductsTypesHandler;
