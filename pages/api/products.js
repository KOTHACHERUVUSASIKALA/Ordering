import prisma from "../../lib/prisma";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const products = await prisma.product.findMany();
    return res.status(200).json(products);
  }

  if (req.method === "POST") {
    const { name, price } = req.body;
    const product = await prisma.product.create({
      data: { name, price: parseFloat(price) },
    });
    return res.status(201).json(product);
  }

  if (req.method === "DELETE") {
    const { id } = req.body;
    await prisma.product.delete({ where: { id } });
    return res.status(204).end();
  }
}
