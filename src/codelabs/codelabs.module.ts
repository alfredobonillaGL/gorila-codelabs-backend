import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CodelabsController } from './controllers/codelabs.controller';
import { CodelabsService } from './service/codelabs.service';
import { CodelabSchema } from './schemas/codelab.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Codelabs', schema: CodelabSchema }])],
  controllers: [CodelabsController],
  providers: [CodelabsService],
})
export class CodelabsModule {}
