import { Module } from '@nestjs/common';
import { MemberController } from './controllers/member.controller';
import { MemberService } from './services/member.service';
import { memberProviders } from './database/member.providers';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [MemberController],
  providers: [
    MemberService,
    ...memberProviders,
  ],
})
export class MemberModule {}