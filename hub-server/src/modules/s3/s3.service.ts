import { Injectable } from '@nestjs/common';
import aws from 'aws-sdk';
import crpto from 'crypto';
import dotenv from 'dotenv';

dotenv.config();

const region = process.env.S3_REGION;
const bucketName = process.env.S3_BUCKET_NAME;
const accessKeyId = process.env.S3_ACCESS_KEY;
const secretAccessKey = process.env.S3_SECRET_KEY;

@Injectable()
export class S3Service {
  async getUploadUrl(): Promise<string> {
    const s3 = new aws.S3({
      region,
      accessKeyId,
      secretAccessKey,
      signatureVersion: 'v4',
    });

    const imageName = crpto.randomBytes(16).toString('hex');
    const params = { Bucket: bucketName, Key: imageName, Expires: 60 };
    const uploadUrl = await s3.getSignedUrlPromise('putObject', params);

    return uploadUrl;
  }
}
