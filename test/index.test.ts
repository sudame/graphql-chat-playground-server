import { PrismaClient } from "@prisma/client";
import { execSync } from "child_process";
import { rm } from "fs/promises";
import path from "path";

const DATABASE_URL = "file:./test.db";

const dirname = __dirname;
const prismaBinary = path.resolve(dirname, "../node_modules/.bin/prisma");

let prisma: PrismaClient;

beforeAll(async () => {
  // テスト用データベースの作成
  execSync(`${prismaBinary} db push`, {
    env: {
      ...process.env,
      DATABASE_URL,
    },
  });

  // シード値の流し込み
  execSync(`${prismaBinary} db seed`, {
    env: {
      ...process.env,
      DATABASE_URL,
    },
  });

  prisma = new PrismaClient({
    datasources: {
      db: {
        url: DATABASE_URL,
      },
    },
  });
});

// テスト用データベースの掃除
afterAll(async () => {
  await prisma.$disconnect();
  await rm(path.resolve(dirname, "../prisma/test.db"), { force: true });
});

test("シード値が正しく設定されている", async () => {
  const me = await prisma.user.findUniqueOrThrow({
    where: {
      id: "me",
    },
  });

  expect(me.name).toBe("自分");
});

// TODO: Write more tests!
