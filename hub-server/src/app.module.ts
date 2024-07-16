import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './modules/user/user.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UserResolver } from './modules/user/user.resolver';
import { S3Module } from './modules/s3/s3.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'hub',
      entities: [`${__dirname}/../modules/**/*.entity.ts`],
      logging: true,
      // sync from code to db
      synchronize: true,
      // create entities if not exist
      autoLoadEntities: true,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: './src/schema.gql',
    }),
    UserModule,
    S3Module,
  ],
  controllers: [AppController],
  providers: [AppService, UserResolver],
})
export class AppModule {}
