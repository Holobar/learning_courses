import { Module } from '@nestjs/common';
import { CoursesWeeksService } from './courses-weeks.service';
import { CoursesWeeksController } from './courses-weeks.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoursesWeek } from '../entities/courses-week.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CoursesWeek])],
  controllers: [CoursesWeeksController],
  providers: [CoursesWeeksService],
})
export class CoursesWeeksModule {}
