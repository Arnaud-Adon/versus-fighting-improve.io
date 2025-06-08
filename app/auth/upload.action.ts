"use server";

import { PrismaClient } from "@/generated/prisma";
import { userAction } from "@/lib/safe-action";
import { zfd } from "zod-form-data";
import { uploadFileToS3 } from "./s3-utils";

const prisma = new PrismaClient();

export const uploadAction = userAction
  .schema(
    zfd.formData({
      file: zfd.file().optional(),
    })
  )
  .action(async ({ parsedInput, ctx: { user } }) => {
    const file = parsedInput.file;

    if (!file) {
      await prisma.user.update({
        where: {
          id: user.id,
        },
        data: {
          image: null,
        },
      });

      return {
        url: null,
      };
    }

    const fileUrl = await uploadFileToS3({
      file,
      path: `users/${user?.id}/avatar`,
      contentType: file.type,
    });

    await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        image: fileUrl,
      },
    });

    console.log(fileUrl);

    return {
      url: fileUrl,
    };
  });
