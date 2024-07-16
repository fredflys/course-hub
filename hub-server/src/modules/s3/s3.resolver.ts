import { Resolver, Query } from '@nestjs/graphql';
import { S3Service } from './s3.service';

@Resolver()
export class S3Resolver {
  constructor(private readonly s3Service: S3Service) {}

  @Query(() => String, { description: '' })
  async getUploadUrl(): Promise<string> {
    return await this.s3Service.getUploadUrl();
  }
}
