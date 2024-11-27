import prisma from "../lib/prisma";

async function main() {
  await prisma.product.createMany({
    data: [
      { name: "Tomatoes", price: 2.0 },
      { name: "Potatoes", price: 1.5 },
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
