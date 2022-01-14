import { Module } from '@nestjs/common';
import { CatsModule } from './cats.module';
import { AppController } from './controllers/app.controller';
import { DatabaseModule } from './database/database.module';
import { AppService } from './services/app.service';
import { MemberModule } from './member.module';

@Module({
  imports: [DatabaseModule, CatsModule, MemberModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

