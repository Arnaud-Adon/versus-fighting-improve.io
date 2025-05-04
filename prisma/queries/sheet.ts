import { Prisma, PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

export const getDashboardUserSheets = async ({
  userId,
}: {
  userId: string;
}) => {
  return await prisma?.sheet.findMany({
    where: {
      userId,
    },
    take: 3,
    select: {
      id: true,
      title: true,
      createdAt: true,
      content: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};

export type GetDashboardUserSheetsType = Prisma.PromiseReturnType<
  typeof getDashboardUserSheets
>;
