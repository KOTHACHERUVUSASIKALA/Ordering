import prisma from "../../lib/prisma";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const orders = await prisma.order.findMany({ include: { product: true } });
    return res.status(200).json(orders);
  }

  if (req.method === "POST") {
    const { productId, quantity, buyerName, contactInfo, deliveryAddr } = req.body;
    const order = await prisma.order.create({
      data: { productId, quantity, buyerName, contactInfo, deliveryAddr },
    });
    return res.status(201).json(order);
  }
}
