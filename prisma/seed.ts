import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    const hydra = await prisma.creature.create({
        data: {
          name: 'Hydra',
          description: 'A huge five-headed drake',
          origin: 'Greece',
          skills: {
            create: [
              {
                name: 'Invigorated Growth',
                description: 'Every time a head is cut off, it grows two more heads.',
              },
              {
                name: 'Elemental Onslaught',
                description: 'Each head exhales a different type of damage (Fire, Thunder, Ice, Poison and Acid, ).',
              },
    // Puedes agregar más habilidades aquí
            ],
          },
          weaknesses: {
            create: [
              {
                name: 'Petrification',
                description: 'This creature is vulnerable to being petrified',
              },
              {
                name: 'Heart-Attack',
                description: 'This creature is susceptible to a powerful strike to the heart.',
              },
            ],
          },
        },
      });

      const hecatoncheires = await prisma.creature.create({
        data: {
          name: 'Hecatoncheires',
          description: 'Are giants with a hundred hands and fifty heads, being incrdibly powerful and formidable',
          origin: 'Greece',
          skills: {
            create: [
              {
                name: 'Multi-Arm Assault',
                description: 'They can strike multiple foes at once thanks to their fifty arms, delivering devastating blows in rapid succession.',
              },
    // Puedes agregar más habilidades aquí
            ],
          },
          weaknesses: {
            create: [
              {
                name: 'Fury of the Gods',
                description: 'Their existence is often tied to the wrath of the gods, making them vulnerable to divine retribution.',
              },
            ],
          },
        },
      });

    console.log ({ hydra, hecatoncheires });
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
