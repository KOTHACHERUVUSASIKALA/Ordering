import prisma from "../../../lib/prisma";
import { sendEmail } from "../../../lib/email";

export default async function handler(req, res) {
  const { id } = req.query;

  if (req.method === "GET") {
    const order = await prisma.order.findUnique({ where: { id: parseInt(id) } });
    return res.status(200).json(order);
  }

  if (req.method === "PUT") {
    const { status } = req.body;
    const updatedOrder = await prisma.order.update({
      where: { id: parseInt(id) },
      data: { status },
    });

    if (status === "Delivered") {
      await sendEmail({
        to: updatedOrder.contactInfo,
        subject: "Order Delivered",
        text: `Your order #${id} has been delivered.`,
      });
    }

    return res.status(200).json(updatedOrder);
  }
}
