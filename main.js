// prisma sqlite db file dev.db作成

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // データベースに接続して何か操作を行う
  const user = await prisma.user.create({
    data: {
      name: 'Alice',
      email: 'alice@prisma.io',
    },
  });
  console.log(user);
}

main()
  .catch(e => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });