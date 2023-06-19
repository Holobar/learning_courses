import { Module } from '@nestjs/common';
import { UserAccessCourseService } from './user-access-course.service';
import { UserAccessCourseController } from './user-access-course.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserAccessCourse } from '../entities/user-access-course.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserAccessCourse])],
  controllers: [UserAccessCourseController],
  providers: [UserAccessCourseService],
})
export class UserAccessCourseModule {}
