import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { S3Resolver } from './s3.resolver';
import { S3Service } from './s3.service';

@Module({
  imports: [TypeOrmModule.forFeature([])],
  providers: [S3Resolver, S3Service],
  exports: [],
})
export class S3Module {}
