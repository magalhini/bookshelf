import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { shelvesData } from "./seedData";

const prisma = new PrismaClient();
const salt = bcrypt.genSaltSync();

const userData = [
  {
    firstName: "Alice",
    lastName: "Doe",
    email: "alice@me.com",
    password: bcrypt.hashSync("password", salt),
    shelves: {
      create: [shelvesData[0]],
    },
  },
  {
    firstName: "John",
    lastName: "McAdams",
    email: "dev@dev.com",
    password: bcrypt.hashSync("password", salt),
    shelves: {
      create: [shelvesData[1]],
    },
  },
];

async function main() {
  console.log(`Start seeding ...`);
  // eslint-disable-next-line no-restricted-syntax
  for (const u of userData) {
    // eslint-disable-next-line no-await-in-loop
    const user = await prisma.user.create({
      data: u,
    });
    console.log(`Created user with id: ${user.id}`);
  }
  console.log(`Seeding finished.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
