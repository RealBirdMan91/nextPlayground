// prisma/seed.js
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  const user1 = await prisma.user.create({
    data: {
      email: "user1@example.com",
      name: "User 1",
    },
  });

  const user2 = await prisma.user.create({
    data: {
      email: "user2@example.com",
      name: "User 2",
    },
  });

  const user3 = await prisma.user.create({
    data: {
      email: "user3@example.com",
      name: "User 3",
    },
  });

  const user4 = await prisma.user.create({
    data: {
      email: "user4@example.com",
      name: "User 4",
    },
  });

  const user5 = await prisma.user.create({
    data: {
      email: "user5@example.com",
      name: "User 5",
    },
  });

  console.log({ user1, user2, user3, user4, user5 });
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
