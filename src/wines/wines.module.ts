import { Module } from '@nestjs/common';
import { WinesService } from './wines.service';
import { WinesResolver } from './wines.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Wine } from './entities/wine.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Wine])],
  providers: [WinesResolver, WinesService],
})
export class WinesModule {}
