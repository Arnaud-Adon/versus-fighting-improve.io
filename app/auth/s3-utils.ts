import { env } from "@/env";
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";

function getS3Client() {
  return new S3Client({
    region: env.AWS_S3_REGION,
    credentials: {
      accessKeyId: env.AWS_S3_ACCESS_KEY_ID,
      secretAccessKey: env.AWS_S3_SECRET_ACCESS_KEY_ID,
    },
  });
}

export async function uploadFileToS3({
  file,
  path,
  contentType,
}: {
  file: File;
  path: string;
  contentType: string;
}) {
  const s3Client = getS3Client();

  const fileBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(fileBuffer);

  const fileExtension = file.name.split(".").pop();

  const filePath = `${path}/default.${fileExtension}`;

  const command = new PutObjectCommand({
    Bucket: env.AWS_S3_BUCKET_NAME,
    Key: filePath,
    Body: buffer,
    ContentType: contentType || file.type,
  });

  try {
    await s3Client.send(command);
  } catch (error) {
    console.error("S3 upload error", error);
    throw new Error("Failed to upload file to S3");
  }

  https: return `https://s3.${env.AWS_S3_REGION}.amazonaws.com/${env.AWS_S3_BUCKET_NAME}/${filePath}`;
}
