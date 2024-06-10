import { Module } from '@nestjs/common';
import { Service } from './user/user.service';
import { UserController } from './user/user.controller';
import { Connection } from './connection/connection';

@Module({
  providers: [Service, Connection],
  controllers: [UserController],
})
export class UserModule {}
