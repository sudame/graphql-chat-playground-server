import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main(): Promise<void> {
  await prisma.user.create({
    data: {
      name: "自分",
      id: "me",
      rooms: {
        create: [
          {
            name: "自分のテストチャットルーム",
            lastMessagePostedAt: new Date(),
          },
        ],
      },
    },
  });

  await prisma.user.create({
    data: {
      name: "誰か",
      id: "another",
      rooms: {
        create: [
          {
            name: "誰かのテストチャットルーム",
            lastMessagePostedAt: new Date(),
          },
        ],
      },
    },
  });
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
