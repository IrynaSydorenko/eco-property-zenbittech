import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const deals = [
    {
      title: 'The Marina Torch',
      totalAmount: 6500000,
      pricePerSqM: 60000,
      amountSold: 75,
      projectedYield: 9.25,
      daysLeft: 150,
      imageUrl: 'https://i.imgur.com/NFKN5Bt.png',
    },
    {
      title: 'HHHR Tower',
      totalAmount: 6500000,
      pricePerSqM: 60000,
      amountSold: 75,
      projectedYield: 9.25,
      daysLeft: 150,
      imageUrl: 'https://i.imgur.com/ujBzam1.png',
    },
    {
      title: 'Ocean Peaks',
      totalAmount: 6500000,
      pricePerSqM: 60000,
      amountSold: 75,
      projectedYield: 9.25,
      daysLeft: 150,
      imageUrl: 'https://i.imgur.com/Dgv49bz.png',
    },
    {
      title: 'Al Yagoub Tower',
      totalAmount: 6500000,
      pricePerSqM: 60000,
      amountSold: 75,
      projectedYield: 9.25,
      daysLeft: 150,
      imageUrl: 'https://i.imgur.com/Y6DZQv0.png',
    },
  ];

  for (const deal of deals) {
    await prisma.deal.create({
      data: deal,
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
