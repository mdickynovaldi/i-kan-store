import {PrismaClient} from '@prisma/client';
import sampleData from '@/db/sample-data';

const prisma = new PrismaClient();
export default async function main() {
    
    await prisma.product.deleteMany();

    await prisma.product.createMany({ data: sampleData.products });

    console.log('Database Seeded Complete 🌱');
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });