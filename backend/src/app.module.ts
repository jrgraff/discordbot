import { HttpModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';

import { AuthModule } from './auth/auth.module';
import { entities } from './typeorm';
import { PassportModule } from '@nestjs/passport';
import { join } from 'path/posix';
import { UserResolver } from './graphql/resolvers/User.resolver';
import { DiscordModule } from './discord/discord.module';

let envFilePath = '.env.local';

if (process.env.ENVIRONMENT === 'PRODUCTION') {
  envFilePath = '.env.production';
} else if (process.env.ENVIRONMENT === 'TEST') {
  envFilePath = '.env.test';
}

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath }),
    AuthModule,
    PassportModule.register({ session: true }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: Number.parseInt(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      entities,
      synchronize: true,
    }),
    HttpModule,
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src', 'graphql', 'index.ts'),
      },
      useGlobalPrefix: true,
      cors: {
        origin: 'http://localhost:3000',
      },
    }),
    DiscordModule,
  ],
  controllers: [],
  providers: [UserResolver],
})
export class AppModule {}
