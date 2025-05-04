import { prisma } from "../src/lib/prisma";

const main = async () => {
  const characters = await prisma.character.findMany({
    where: {
      name: "Street Fighter 6",
    },
  });

  const fightingGame = await prisma.fightingGame.findFirst({
    where: {
      name: "Street Fighter 6",
    },
  });

  if (!characters || !fightingGame) {
    throw new Error("Characters or fighting game not found");
  }

  const newCharacters = [
    "Elena",
    "Mai",
    "Terry",
    "M.Bison",
    "Akuma",
    "Ed",
    "A.K.I",
    "Rashid",
    "Cammy",
    "Lily",
    "Zangief",
    "JP",
    "Marisa",
    "Manon",
    "Dee Jay",
    "E.Honda",
    "Blanka",
    "Juri",
    "Kimberly",
    "Guile",
    "Jamie",
    "Luke",
  ];

  for (const character of newCharacters) {
    if (characters.some((c) => c.name === character)) continue;

    await prisma.character.create({
      data: {
        name: character,
        fightingGame: {
          connect: {
            id: fightingGame?.id,
          },
        },
      },
    });
  }
};

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
